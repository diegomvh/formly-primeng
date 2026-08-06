import { ConfigOption } from '@ngx-formly/core';
import { FormlyPrimengInputmask } from './inputmask.type';

export function withFormlyPrimengInputmask(): ConfigOption {
  return {
    types: [
      {
        name: 'inputmask',
        component: FormlyPrimengInputmask,
        wrappers: ['error', 'helptext', 'label', 'field'],
      },
    ],
  };
}
