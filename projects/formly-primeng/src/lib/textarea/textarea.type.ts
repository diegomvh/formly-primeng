import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyPrimengFieldProps } from '../field';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';

interface FormlyPrimengTextareaProps extends FormlyPrimengFieldProps {
  autoResize?: boolean;
  rows?: number;
  cols?: number;
}

export interface FormlyPrimengTextareaConfig extends FieldTypeConfig<FormlyPrimengTextareaProps> {
  type: 'textarea' | Type<FormlyPrimengTextarea>;
}

@Component({
  selector: 'formly-primeng-textarea',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, TextareaModule],
  template: ` <textarea 
    [id]="id"
    pInputTextarea
    (focus)="props.focus && props.focus(field, $event)"
    (blur)="props.blur && props.blur(field, $event)"
    (keyup)="props.keyup && props.keyup(field, $event)"
    (keydown)="props.keydown && props.keydown(field, $event)"
    (click)="props.click && props.click(field, $event)"
    (change)="props.change && props.change(field, $event)"
    (keypress)="props.keypress && props.keypress(field, $event)"
    (wheel)="props.wheel && props.wheel(field, $event)"
    [autoResize]="props.autoResize"
    [rows]="props.rows"
    [fluid]="props.fluid"
    [cols]="props.cols"
    [formControl]="formControl" 
    [formlyAttributes]="field" 
  ></textarea> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengTextarea extends FieldType<FormlyPrimengTextareaConfig> {
  override defaultOptions?: Partial<FormlyPrimengTextareaConfig> = {
    props: {},
  };
}
