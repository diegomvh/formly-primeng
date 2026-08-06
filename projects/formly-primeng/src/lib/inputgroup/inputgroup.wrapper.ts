import { CommonModule } from '@angular/common';
import { afterEveryRender, afterNextRender, Component, ElementRef } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldWrapper, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { FormlyPrimengFieldProps } from '../field';
import { ButtonModule } from 'primeng/button';

export interface FormlyPrimengInputgroupProps extends 
  FormlyPrimengFieldProps {
    leftAddons: { icon: string, click?: (field: FormlyFieldConfig, event: Event) => void}[];
    rightAddons: { icon: string, click?: (field: FormlyFieldConfig, event: Event) => void}[];
}
//https://github.com/primefaces/primeng/issues/9741
@Component({
  selector: 'formly-primeng-inputgroup',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, InputGroupModule, InputGroupAddonModule, ButtonModule],
  template: `
    <p-inputgroup>
      @for (addon of props.leftAddons; track addon) {
        <p-inputgroup-addon>
          @if (!addon.click && addon.icon) {
            <i class="{{addon.icon}}"></i>
          }
          @if (addon.click) {
            <p-button (click)="buttonClick(addon, $event)" icon="{{addon.icon}}"/>
          }
        </p-inputgroup-addon>
      }
      <ng-container #fieldComponent></ng-container>
      @for (addon of props.rightAddons; track addon) {
        <p-inputgroup-addon>
          @if (!addon.click && addon.icon) {
            <i class="{{addon.icon}}"></i>
          }
          @if (addon.click) {
            <p-button (click)="buttonClick(addon, $event)" icon="{{addon.icon}}"/>
          }
        </p-inputgroup-addon>
      }
    </p-inputgroup>
  `,
})
export class FormlyPrimengInputgroupWrapper extends FieldWrapper<FormlyFieldConfig<FormlyPrimengInputgroupProps>> {
  constructor() {
    super();
    afterNextRender(() => {
      const elements = (<ElementRef[]>(this.field as any)._elementRefs);
      if (elements && elements.length > 0) {
        const inputElement = elements[0].nativeElement;
        const parentElement = inputElement?.parentElement;
        if (parentElement) {
          parentElement.style.display = "flex";
          parentElement.style.width = "100%";
        }
        const grandParentElement = parentElement?.parentElement;
        if (grandParentElement) {
          grandParentElement.style.width = "100%";
        }
      }
    })
  }

   buttonClick(addon: any, event: Event) {
    if (addon.click) {
      addon.click(this.field, event);
    }
  }
}
