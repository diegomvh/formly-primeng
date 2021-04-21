import { Component, ChangeDetectionStrategy, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { Dropdown } from 'primeng/dropdown';
import { Subscription } from 'rxjs';
import { PrimengComponentType } from '../prime.type';

@Component({
  selector: 'formly-primeng-dropdown',
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
export class FormlyPrimengDropdown extends PrimengComponentType implements AfterViewInit, OnDestroy {
  @ViewChild(Dropdown) dropdown!: Dropdown;
  ngAfterViewInit() {
    this.bind(this.dropdown);
  }
  ngOnDestroy(): void {
    this.unbind();
  }
}
