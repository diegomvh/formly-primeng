import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyFieldProps } from '../field';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface InputTextProps extends FormlyFieldProps {
  fluid?: boolean;
}

export interface FormlyInputTextFieldConfig extends FormlyFieldConfig<InputTextProps> {
  type: 'inputtext' | Type<FormlyFieldInputText>;
}

@Component({
  selector: 'formly-field-primeng-inputtext',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, InputTextModule],
  template: `
    <input
      [id]="id"
      pInputText
      (focus)="props.focus && props.focus(field, $event)"
      (blur)="props.blur && props.blur(field, $event)"
      (keyup)="props.keyup && props.keyup(field, $event)"
      (keydown)="props.keydown && props.keydown(field, $event)"
      (click)="props.click && props.click(field, $event)"
      (change)="props.change && props.change(field, $event)"
      (keypress)="props.keypress && props.keypress(field, $event)"
      (wheel)="props.wheel && props.wheel(field, $event)"
      [fluid]="props.fluid"
      [formControl]="formControl"
      [formlyAttributes]="field"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldInputText extends FieldType<FieldTypeConfig<InputTextProps>> {
  override defaultOptions?: Partial<FieldTypeConfig<InputTextProps>> = {
    props: {},
  };
}
