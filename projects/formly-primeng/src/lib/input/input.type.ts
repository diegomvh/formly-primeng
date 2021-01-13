import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-primeng-input',
  template: `
    <input
      *ngIf="to.type !== 'number'; else numberTmp"
      pInputText
      [type]="to.type || 'text'"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [ngClass]="{'p-invalid': showError}"
    />
    <ng-template #numberTmp>
      <input type="number"
        pInputText
        [formControl]="formControl"
        [formlyAttributes]="field"
        [ngClass]="{'p-invalid': showError}"
      />
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldInput extends FieldType {}
