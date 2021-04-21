import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-primeng-inputgroup',
  template: `
  <div class="p-inputgroup">
    <span *ngFor="let addon of to.prefix_addons" class="p-inputgroup-addon">
      <i *ngIf="addon.icon; else textAddon" class="{{addon.icon}}" style="{{addon.style}}"></i>
      <ng-template #textAddon>
        {{addon}}
      </ng-template>
    </span>
    <input
      *ngIf="to.type !== 'number'; else numberTmp"
      pInputText
      [type]="to.type || 'text'"
      [formControl]="formControl"
      [formlyAttributes]="field"
    />
    <ng-template #numberTmp>
      <input type="number" pInputText [formControl]="formControl" [formlyAttributes]="field" />
    </ng-template>
    <span *ngFor="let addon of to.suffix_addons" class="p-inputgroup-addon">
      <i *ngIf="addon.icon; else textAddon" class="{{addon.icon}}" style="{{addon.style}}"></i>
      <ng-template #textAddon>
        {{addon}}
      </ng-template>
    </span>
  </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldInputGroup extends FieldType {
  defaultOptions = {
    templateOptions: {
      addons: []
    }
  };
}
