import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType, FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-primeng-form-field-group',
  template: `
  <div class="p-inputgroup">
    <span *ngFor="let addon of to.prefix_addons" class="p-inputgroup-addon">
      <i *ngIf="addon.icon; else textAddon" class="{{addon.icon}}" style="{{addon.style}}"></i>
      <ng-template #textAddon>
        {{addon}}
      </ng-template>
    </span>
    <button *ngFor="let button of to.prefix_buttons"
      type="button" pButton
      (click)="buttonClick($event, button)"
      icon="{{button.icon}}"
    ></button>
    <ng-container #fieldComponent></ng-container>
    <button *ngFor="let button of to.suffix_buttons"
      type="button" pButton
      (click)="buttonClick($event, button)"
      icon="{{button.icon}}"
    ></button>
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
export class FormlyWrapperFormFieldGroup extends FieldWrapper {
  defaultOptions = {
    templateOptions: {
      prefix_addons: [],
      suffix_addons: [],
      suffix_buttons: []
    }
  };
  buttonClick(event: any, button: any) {
    if (button.click) {
      button.click(event);
    }
  }
}
