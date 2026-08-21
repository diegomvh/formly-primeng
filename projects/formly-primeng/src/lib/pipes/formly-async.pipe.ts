import { OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { BehaviorSubject, isObservable, Subscription } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Pipe({ name: 'formlyAsync', standalone: true })
export class FormlyAsyncPipe implements PipeTransform, OnDestroy {
  private _subscription: Subscription | null = null;
  private _options: BehaviorSubject<any[]> | null = null;

  transform(options: any, field?: FormlyFieldConfig) {
    if (!isObservable(options)) {
      options = this.observableOf(options, field);
    } else {
      this.dispose();
    }

    return options;
  }

  ngOnDestroy(): void {
    this.dispose();
  }

  private dispose() {
    if (this._options) {
      this._options.complete();
      this._options = null;
    }

    if (this._subscription) {
      this._subscription.unsubscribe();
      this._subscription = null;
    }
  }

  private observableOf(options: any, f?: FormlyFieldConfig) {
    this.dispose();
    if (f && f.options && f.options.fieldChanges) {
      this._subscription = f.options.fieldChanges
        .pipe(
          filter(({ property, type, field }) => {
            return (
              type === 'expressionChanges' &&
              (property.indexOf('templateOptions.options') === 0 || property.indexOf('props.options') === 0) &&
              field === f &&
              Array.isArray(field.props?.options) &&
              !!this._options
            );
          }),
          tap(() => this._options?.next(f.props?.options as any)),
        )
        .subscribe();
    }

    this._options = new BehaviorSubject(options);
    return this._options.asObservable();
  }
}