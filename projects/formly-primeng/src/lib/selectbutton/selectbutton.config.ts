import { ConfigOption } from '@ngx-formly/core';
import { FormlyPrimengSelectbutton } from './selectbutton.type';

export function withFormlyPrimengSelectbutton(): ConfigOption {
  return {
    types: [
      {
        name: 'selectbutton',
        component: FormlyPrimengSelectbutton,
        wrappers: ['field'],
      }
    ],
  };
}
