import { Component, ChangeDetectionStrategy, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { Dropdown } from 'primeng/dropdown';
import { Subscription } from 'rxjs';

@Component({
  selector: 'formly-field-primeng-select',
  template: `
    <p-dropdown
      [placeholder]="to.placeholder"
      [options]="to.options | formlySelectOptions: field | async"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [showClear]="!to.required"
      appendTo="body"
    >
    </p-dropdown>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldSelect extends FieldType implements AfterViewInit, OnDestroy {
  @ViewChild(Dropdown) dropdown!: Dropdown;
  defaultOptions = {
    templateOptions: {
      options: [],
      dropdown: {},
      events: {}
    }
  };
  subscriptions: Subscription[] = [];
  ngAfterViewInit() {
    Object.assign(this.dropdown, this.to.dropdown);
    Object.entries(this.to.events).forEach(([k, v]) => this.subscriptions.push((<any>this.dropdown)[k].subscribe(v)));
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
