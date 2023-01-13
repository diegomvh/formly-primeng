import { OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Pipe({ name: 'formlyTreeSelectOptions' })
export class FormlyTreeSelectOptionsPipe implements PipeTransform, OnDestroy {
  private _subscription: Subscription | null = null;
  private _options: BehaviorSubject<any[]> | null = null;

  transform(options: any, field?: FormlyFieldConfig) {
    if (!(options instanceof Observable)) {
      options = this.observableOf(options, field);
    } else {
      this.dispose();
    }

    return (options as Observable<any>).pipe(
      map(value => this.toOptions(value, field || {})),
    );
  }

  ngOnDestroy(): void {
    this.dispose();
  }

  private toOptions(options: any, field: FormlyFieldConfig) {
    const tOptions: any[] = [],
      to = field.templateOptions || {};

    options.map((option: any) => {
      tOptions.push(this.toOption(option, to));
    });

    return tOptions;
  }

  private toOption(item: any, to: any) {
    return {
      label: this.getLabelProp(item, to),
      value: this.getValueProp(item, to),
      disabled: this.getDisabledProp(item, to) || false,
      expandedIcon: this.getExpandedIconProp(item, to),
      collapsedIcon: this.getCollapsedIconProp(item, to),
      children: this.getChildrenProp(item, to),
    };
  }

  private getLabelProp(item: any, to: any): string {
    if (typeof to.labelProp === 'function') {
      return to.labelProp(item);
    }

    return item[to.labelProp || 'label'];
  }

  private getValueProp(item: any, to: any): string {
    if (typeof to.valueProp === 'function') {
      return to.valueProp(item);
    }

    return item[to.valueProp || 'value'];
  }

  private getDisabledProp(item: any, to: any): string {
    if (typeof to.disabledProp === 'function') {
      return to.disabledProp(item);
    }
    return item[to.disabledProp || 'disabled'];
  }

  private getChildrenProp(item: any, to: any): any[] {
    let children;
    if (typeof to.childrenProp === 'function') {
      children = to.childrenProp(item);
    }

    children = item[to.childrenProp || 'children'];
    if (Array.isArray(children))
      return children.map(ch => this.toOption(ch, to));
    return [];
  }

  private getExpandedIconProp(item: any, to: any): string {
    if (typeof to.expandedIconProp === 'function') {
      return to.expandedIconProp(item);
    }

    return item[to.expandedIconProp || 'expandedIcon'];
  }

  private getCollapsedIconProp(item: any, to: any): string {
    if (typeof to.collapsedIconProp === 'function') {
      return to.collapsedIconProp(item);
    }

    return item[to.collapsedIconProp || 'collapsedIcon'];
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
      this._subscription = f.options.fieldChanges.pipe(
        filter(({ property, type, field }) => {
          return type === 'expressionChanges'
            && property.indexOf('templateOptions.options') === 0
            && field === f
            && Array.isArray(field.templateOptions?.options)
            && !!this._options;
        }),
        tap(() => this._options?.next(f.templateOptions?.options as any)),
      ).subscribe();
    }

    this._options = new BehaviorSubject(options);
    return this._options.asObservable();
  }
}
