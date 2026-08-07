import { JsonPipe } from '@angular/common';
import { afterRenderEffect, Component, EventEmitter, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { ButtonModule } from 'primeng/button';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';


@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, FormlyModule, ButtonModule, JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  autoComplete$ = new EventEmitter<any>();
  basicform = new FormGroup({});
  basicmodel = {};
  basicfields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'grid grid-cols-8 gap-4',
      props: {
        hideLabel: true,
      },
      fieldGroup: [
        {
          //https://v21.primeng.org/autocomplete
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
          //https://v21.primeng.org/cascadeselect
          key: 'cascadeselect',
          type: 'cascadeselect',
          className: 'col-span-2',
          props: {
            label: 'CascadeSelect',
            fluid: true,
            placeholder: 'CascadeSelect placeholder',
            optionLabel: 'label',
            optionGroupLabel: 'name',
            optionGroupChildren: 'options',
            options: [
              { name: 'Options', options: [{ label: 'Option 1', value: '1' }] },
              { label: 'Option 1', value: '1' },
              { label: 'Option 2', value: '2' },
              { label: 'Option 3', value: '3' },
            ],
          },
        },
        {
          //https://v21.primeng.org/checkbox
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
          //https://v21.primeng.org/colorpicker
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
          //https://v21.primeng.org/datepicker
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
          //https://v21.primeng.org/editor
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
          //https://v21.primeng.org/floatlabel
          key: 'inputtext',
          type: 'inputtext',
          className: 'col-span-2',
          wrappers: ['error', 'helptext', 'floatlabel', 'label', 'field'],
          props: {
            label: 'InputText with FloatLabel',
            helpText: 'This is a help text',
            fluid: true,
          },
        },
        {
          //https://v21.primeng.org/iconfield
          key: 'inputtext',
          type: 'inputtext',
          className: 'col-span-2',
          wrappers: ['error', 'helptext', 'label', 'iconfield', 'field'],
          props: {
            rightIcons: ['pi pi-search'],
            leftIcons: ['pi pi-user'],
            label: 'InputText with IconField',
            fluid: true,
          },
        },
        {
          //https://v21.primeng.org/iftalabel
          key: 'inputtext',
          type: 'inputtext',
          className: 'col-span-2',
          wrappers: ['error', 'helptext', 'iftalabel', 'label', 'field'],
          props: {
            label: 'InputText with IfTaLabel',
            helpText: 'This is a help text',
            fluid: true,
          },
        },
        {
          //https://v21.primeng.org/inputgroup
          //#TODO
          key: 'inputtext',
          type: 'inputtext',
          className: 'col-span-2',
          wrappers: ['error', 'helptext', 'label', 'field', 'inputgroup'],
          props: {
            label: 'InputText with InputGroup',
            leftAddons: [{icon: 'pi pi-user'}],
            fluid: true,
          },
        },
        {
          //https://v21.primeng.org/inputmask
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
          //https://v21.primeng.org/inputnumber
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
          //https://v21.primeng.org/inputotp
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
          //https://v21.primeng.org/inputtext
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
          //https://v21.primeng.org/inputtext
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
          //https://v21.primeng.org/knob
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
          //https://v21.primeng.org/listbox
          key: 'listbox',
          type: 'listbox',
          className: 'col-span-2',
          props: {
            label: 'Listbox',
            fluid: true,
            options: [
              { label: 'Option 1', value: '1' },
              { label: 'Option 2', value: '2' },
            ],
            placeholder: 'Listbox placeholder',
          },
        },
        {
          //https://v21.primeng.org/multiselect
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
          //https://v21.primeng.org/password
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
          //https://v21.primeng.org/radiobutton
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
          //https://v21.primeng.org/rating
          key: 'rating',
          type: 'rating',
          className: 'col-span-2',
          props: {
            label: 'Rating',
            stars: 5,
            placeholder: 'Rating placeholder',
          },
        },
        {
          //https://v21.primeng.org/select
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
          //https://v21.primeng.org/selectbutton
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
          //https://v21.primeng.org/slider
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
          //https://v21.primeng.org/textarea
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
          //https://v21.primeng.org/togglebutton
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
          //https://v21.primeng.org/toggleswitch
          key: 'toggleswitch',
          type: 'toggleswitch',
          className: 'col-span-2',
          props: {
            label: 'ToggleSwitch',
            fluid: true,
            placeholder: 'ToggleSwitch placeholder',
          },
        },
        {
          //https://v21.primeng.org/treeselect
          key: 'treeselect',
          type: 'treeselect',
          className: 'col-span-2',
          props: {
            label: 'TreeSelect',
            fluid: true,
            placeholder: 'TreeSelect placeholder',
            options: [
              { name: 'Options', options: [{ label: 'Option 1', value: '1' }] },
              { label: 'Option 1', value: '1' },
              { label: 'Option 2', value: '2' },
              { label: 'Option 3', value: '3' },
            ],
          },
        },
      ],
    },
  ];

  jsonform = new FormGroup({});
  jsonmodel = {};
  formlyjsonschema = inject(FormlyJsonschema)
  jsonfields = [this.formlyjsonschema.toFieldConfig({
    type: 'object',
    widget: {
      formlyConfig: {
        fieldGroupClassName: 'grid grid-cols-3 gap-4',
      }
    },
    properties: {
      name: { type: 'string', widget: {formlyConfig: {props: {fluid: true}}} },
      age: { type: 'number', widget: {formlyConfig: {props: {fluid: true}}} },
      emails: {
        type: 'array',
        widget: {formlyConfig: {props: {min: 1, max: 4, columns: 2}}},
        items: {
          type: 'string',
          format: 'email',
          widget: {formlyConfig: {props: {fluid: true}}}
        },
      },
      isActive: { type: 'boolean', widget: {formlyConfig: {props: {label: 'Active', binary: true}}} },
      role: {
        type: 'string',
        widget: {formlyConfig: {props: {fluid: true}}},
        enum: ['Admin', 'User', 'Guest'],
      },
      preferences: {
        type: 'object',
        widget: {
          formlyConfig: {
            fieldGroupClassName: 'grid grid-cols-12 gap-4',
          }
        },
        properties: {
          theme: { type: 'string', widget: {formlyConfig: {className: "col-span-8", props: {fluid: true}}} },
          notifications: { type: 'boolean', widget: {formlyConfig: { className: "col-span-4", props: {label: 'Notifications', binary: true}}} },
        },
      },
      addresses: {
        type: 'array',
        widget: {formlyConfig: {
          className: "col-span-3", 
          props: {min: 1, max: 3, add: true, remove: true, label: 'Addresses', description: 'List of addresses'}}},
        items: {
          type: 'object',
          widget: {
            formlyConfig: {
              fieldGroupClassName: 'grid grid-cols-4 gap-4',
              props: {label: 'Address'}
            }
          },
          properties: {
            street: { type: 'string', widget: {formlyConfig: {props: {fluid: true}}} },
            city: { type: 'string', widget: {formlyConfig: {props: {fluid: true}}} },
            state: { type: 'string', widget: {formlyConfig: {props: {fluid: true}}} },
            zip: { type: 'string', widget: {formlyConfig: {props: {fluid: true}}} },
          },
        },
      },
    },
  })];


  customform = new FormGroup({});
  custommodel = {};
  customfields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'grid grid-cols-4 gap-4',
      props: {
        hideLabel: true,
      },
      fieldGroup: [
        {
          key: 'email',
          type: 'email',
          props: {
            fluid: true,
            placeholder: 'Email placeholder',
          },
        },
        {
          key: 'phone',
          type: 'phone',
          props: {
            fluid: true,
            placeholder: 'Phone placeholder',
          },
        },
      ],
    },
  ];
}
