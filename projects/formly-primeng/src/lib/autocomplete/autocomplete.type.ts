import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-primeng-autocomplete',
  template: `
    <p-autoComplete
      [placeholder]="to.placeholder"
      [suggestions]="to.suggestions | formlySelectOptions: field | async"
      [dropdown]="to.dropdown"
      [multiple]="to.multiple"
      [minLength]="to.minLength"
      (completeMethod)="to.search && to.search(field, $event)"
      [formControl]="formControl"
      [formlyAttributes]="field"
    >
    </p-autoComplete>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyAutoComplete extends FieldType {}
