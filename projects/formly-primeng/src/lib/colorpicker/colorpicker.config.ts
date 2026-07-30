import { ConfigOption } from '@ngx-formly/core';
import { FormlyPrimengColorpicker } from './colorpicker.type';

export function withFormlyPrimengColorpicker(): ConfigOption {
  return {
    types: [
      {
        name: 'colorpicker',
        component: FormlyPrimengColorpicker,
        wrappers: ['error', 'helptext', 'field'],
      }
    ],
  };
}
