import { ConfigOption } from '@ngx-formly/core';
import { FormlyPrimengFieldWrapper } from './field.wrapper';

export function withFormlyPrimengField(): ConfigOption {
  return {
    wrappers: [
      {
        name: 'field',
        component: FormlyPrimengFieldWrapper,
      },
    ],
  };
}
