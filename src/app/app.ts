import { JsonPipe } from '@angular/common';
import { Component, EventEmitter } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, FormlyModule, ButtonModule, JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  autoComplete$ = new EventEmitter<any>();
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'grid grid-cols-4 gap-4',
      props: {
        hideLabel: true,
      },
      fieldGroup: [
        {
          key: 'autocomplete',
          type: 'autocomplete',
          className: 'col-span-2',
          props: {
            label: 'AutoComplete',
            fluid: true,
            placeholder: 'Autocomplete placeholder',
          },
        },
        {
          key: 'cascadeselect',
          type: 'cascadeselect',
          className: 'col-span-2',
          props: {
            label: 'CascadeSelect',
            fluid: true,
            placeholder: 'CascadeSelect placeholder',
          },
        },
        {
          key: 'checkbox',
          type: 'checkbox',
          className: 'col-span-2',
          props: {
            label: 'Checkbox',
            fluid: true,
            binary: true,
          },
        },
        {
          key: 'colorpicker',
          type: 'colorpicker',
          className: 'col-span-2',
          props: {
            label: 'ColorPicker',
            fluid: true,
            placeholder: 'ColorPicker placeholder',
          },
        },
        {
          key: 'datepicker',
          type: 'datepicker',
          className: 'col-span-2',
          props: {
            label: 'DatePicker',
            fluid: true,
            placeholder: 'DatePicker placeholder',
          },
        },
        {
          key: 'editor',
          type: 'editor',
          className: 'col-span-2',
          props: {
            label: 'Editor',
            fluid: true,
            placeholder: 'Editor placeholder',
          },
        },
        {
          key: 'inputmask',
          type: 'inputmask',
          className: 'col-span-2',
          props: {
            label: 'InputMask',
            fluid: true,
            placeholder: 'InputMask placeholder',
          },
        },
        {
          key: 'inputnumber',
          type: 'inputnumber',
          className: 'col-span-2',
          props: {
            label: 'InputNumber',
            fluid: true,
            placeholder: 'InputNumber placeholder',
          },
        },
        {
          key: 'inputotp',
          type: 'inputotp',
          className: 'col-span-2',
          props: {
            label: 'InputOtp',
            fluid: true,
            placeholder: 'InputOtp placeholder',
          },
        },
        {
          key: 'input',
          type: 'input',
          className: 'col-span-2',
          props: {
            label: 'Input',
            fluid: true,
            placeholder: 'Input placeholder',
          },
        },
        {
          key: 'inputtext',
          type: 'inputtext',
          className: 'col-span-2',
          props: {
            label: 'InputText',
            fluid: true,
            placeholder: 'InputText placeholder',
          },
        },
        {
          key: 'knob',
          type: 'knob',
          className: 'col-span-2',
          props: {
            label: 'Knob',
            fluid: true,
            placeholder: 'Knob placeholder',
          },
        },
        {
          key: 'listbox',
          type: 'listbox',
          className: 'col-span-2',
          props: {
            label: 'Listbox',
            fluid: true,
            placeholder: 'Listbox placeholder',
          },
        },
        {
          key: 'multiselect',
          type: 'multiselect',
          className: 'col-span-2',
          props: {
            label: 'MultiSelect',
            fluid: true,
            placeholder: 'MultiSelect placeholder',
          },
        },
        {
          key: 'password',
          type: 'password',
          className: 'col-span-2',
          props: {
            label: 'Password',
            fluid: true,
            placeholder: 'Password placeholder',
          },
        },
        {
          key: 'radiobutton',
          type: 'radiobutton',
          className: 'col-span-2',
          props: {
            label: 'Radio',
            fluid: true,
            options: [
              { label: 'Option 1', value: '1' },
              { label: 'Option 2', value: '2' },
            ],
          },
        },
        {
          key: 'rating',
          type: 'rating',
          className: 'col-span-2',
          props: {
            label: 'Rating',
            fluid: true,
            placeholder: 'Rating placeholder',
          },
        },
        {
          key: 'select',
          type: 'select',
          className: 'col-span-2',
          props: {
            label: 'Select',
            placeholder: 'Select placeholder',
            fluid: true,
            required: true,
            options: [
              { label: 'Option 1', value: '1' },
              { label: 'Option 2', value: '2' },
              { label: 'Option 3', value: '3' },
            ],
          },
        },
        {
          key: 'selectbutton',
          type: 'selectbutton',
          className: 'col-span-2',
          props: {
            label: 'SelectButton',
            placeholder: 'SelectButton placeholder',
            fluid: true,
            required: true,
            options: [
              { label: 'Option 1', value: '1' },
              { label: 'Option 2', value: '2' },
              { label: 'Option 3', value: '3' },
            ],
          },
        },
        {
          key: 'slider',
          type: 'slider',
          className: 'col-span-2',
          props: {
            label: 'Slider',
            fluid: true,
            placeholder: 'Slider placeholder',
          },
        },
        {
          key: 'textarea',
          type: 'textarea',
          className: 'col-span-2',
          props: {
            label: 'TextArea',
            placeholder: 'Textarea placeholder',
            fluid: true,
          },
        },
        {
          key: 'togglebutton',
          type: 'togglebutton',
          className: 'col-span-2',
          props: {
            label: 'ToggleButton',
            fluid: true,
            placeholder: 'ToggleButton placeholder',
          },
        },
        {
          key: 'toggleswitch',
          type: 'toggleswitch',
          className: 'col-span-2',
          props: {
            label: 'ToggleSwitch',
            fluid: true,
            placeholder: 'ToggleSwitch placeholder',
          },
        },
      ],
    },
  ];

  onSubmit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model, null, 2));
    }
  }

  setValue(): void {
    this.model = { ...this.model, treeSelect: 'Scarface Movie' };
  }
}
