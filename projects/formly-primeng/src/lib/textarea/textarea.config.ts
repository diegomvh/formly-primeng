import { ConfigOption } from '@ngx-formly/core';
import { FormlyPrimengTextarea } from './textarea.type';

export function withFormlyPrimengTextarea(): ConfigOption {
  return {
    types: [
      {
        name: 'textarea',
        component: FormlyPrimengTextarea,
        wrappers: ['field'],
      },
    ],
  };
}
