import { ConfigOption } from '@ngx-formly/core';
import { FormlyFieldInputOtp } from './inputotp.type';

export function withFormlyFieldInputOtp(): ConfigOption {
  return {
    types: [
      {
        name: 'inputotp',
        component: FormlyFieldInputOtp,
        wrappers: ['field'],
      },
    ],
  };
}
