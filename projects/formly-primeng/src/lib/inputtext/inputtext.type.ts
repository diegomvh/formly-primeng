import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyPrimengFieldProps } from '../field';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface FormlyPrimengInputtextProps extends FormlyPrimengFieldProps {
  fluid?: boolean;
}

export interface FormlyPrimengInputtextConfig extends FieldTypeConfig<FormlyPrimengInputtextProps> {
  type: 'inputtext' | Type<FormlyPrimengInputtext>;
}

@Component({
  selector: 'formly-primeng-inputtext',
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

      [aria-describedby]="props.helpText ? id + '-help' : null"

      [formControl]="formControl"
      [formlyAttributes]="field"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengInputtext extends FieldType<FormlyPrimengInputtextConfig> {
  override defaultOptions?: Partial<FormlyPrimengInputtextConfig> = {
    props: {},
  };
}
