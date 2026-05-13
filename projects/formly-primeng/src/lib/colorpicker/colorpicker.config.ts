import { ConfigOption } from '@ngx-formly/core';
import { FormlyFieldColorPicker } from './colorpicker.type';

export function withFormlyFieldColorPicker(): ConfigOption {
  return {
    types: [
      {
        name: 'colorpicker',
        component: FormlyFieldColorPicker,
        wrappers: ['field'],
      }
    ],
  };
}
