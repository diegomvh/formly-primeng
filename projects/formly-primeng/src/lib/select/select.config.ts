import { ConfigOption } from '@ngx-formly/core';
import { FormlyPrimengSelect } from './select.type';

export function withFormlyPrimengSelect(): ConfigOption {
  return {
    types: [
      {
        name: 'select',
        component: FormlyPrimengSelect,
        wrappers: ['error', 'helptext', 'label', 'field'],
      },
      { name: 'enum', extends: 'select' },
    ],
  };
}
