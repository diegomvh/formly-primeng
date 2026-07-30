import { ConfigOption } from '@ngx-formly/core';
import { FormlyPrimengErrorWrapper } from './error.wrapper';

export function withFormlyPrimengError(): ConfigOption {
  return {
    wrappers: [
      {
        name: 'error',
        component: FormlyPrimengErrorWrapper,
      },
    ],
  };
}
