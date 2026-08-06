import { ConfigOption } from '@ngx-formly/core';
import { FormlyPrimengInputotp } from './inputotp.type';

export function withFormlyPrimengInputotp(): ConfigOption {
  return {
    types: [
      {
        name: 'inputotp',
        component: FormlyPrimengInputotp,
        wrappers: ['error', 'helptext', 'label', 'field'],
      },
    ],
  };
}
