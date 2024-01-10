import { OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Pipe({ name: 'formlyAutoCompleteOptions' })
export class FormlyAutoCompleteOptionsPipe implements PipeTransform, OnDestroy {
  private _subscription: Subscription | null = null;
  private _options: BehaviorSubject<any[]> | null = null;

  transform(options: any, field?: FormlyFieldConfig) {
    if (!(options instanceof Observable)) {
      options = this.observableOf(options, field);
    } else {
      this.dispose();
    }

    const to = field?.templateOptions || {};
    const autoCompleteOptions$ = (options as Observable<any>).pipe(
      map((value) => this.toOptions(value, field || {}))
    );
    return (to._autoCompleteOptions$ = autoCompleteOptions$);
  }

  ngOnDestroy(): void {
    this.dispose();
  }

  private toOptions(options: any, field: FormlyFieldConfig) {
    const gOptions: any[] = [],
      groups: { [name: string]: any[] } = {},
      to = field.templateOptions || {};

    to._flatOptions = true;
    options.map((option: any) => {
      if (!this.getGroupProp(option, to)) {
        gOptions.push(this.toOption(option, to));
      } else {
        to._flatOptions = false;
        if (!groups[this.getGroupProp(option, to)]) {
          groups[this.getGroupProp(option, to)] = [];
          gOptions.push({
            label: this.getGroupProp(option, to),
            group: groups[this.getGroupProp(option, to)],
          });
        }
        groups[this.getGroupProp(option, to)].push(this.toOption(option, to));
      }
    });

    return gOptions;
  }

  private toOption(item: any, to: any) {
    return {
      item,
      label: this.getLabelProp(item, to),
      value: this.getValueProp(item, to),
    };
  }

  private getLabelProp(item: any, to: any): string {
    if (typeof item !== 'object') return item.toString();
    if (typeof to.labelProp === 'function') {
      return to.labelProp(item);
    }

    return item[to.labelProp || 'label'];
  }

  private getValueProp(item: any, to: any): string {
    if (typeof item !== 'object') return item;
    if (typeof to.valueProp === 'function') {
      return to.valueProp(item);
    }

    return item[to.valueProp || 'value'];
  }

  private getGroupProp(item: any, to: any): string {
    if (typeof to.groupProp === 'function') {
      return to.groupProp(item);
    }

    return item[to.groupProp || 'group'];
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
              property.indexOf('templateOptions.options') === 0 &&
              field === f &&
              Array.isArray(field.templateOptions?.options) &&
              !!this._options
            );
          }),
          tap(() => this._options?.next(f.templateOptions?.options as any))
        )
        .subscribe();
    }

    this._options = new BehaviorSubject(options);
    return this._options.asObservable();
  }
}
