import { ConfigOption } from '@ngx-formly/core';
import { FormlyFieldInputMask } from './inputmask.type';

export function withFormlyFieldInputMask(): ConfigOption {
  return {
    types: [
      {
        name: 'inputmask',
        component: FormlyFieldInputMask,
        wrappers: ['field'],
      },
    ],
  };
}
