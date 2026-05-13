import { ConfigOption } from '@ngx-formly/core';
import { FormlyFieldWrapper } from './field.wrapper';

export function withFormlyField(): ConfigOption {
  return {
    wrappers: [
      {
        name: 'field',
        component: FormlyFieldWrapper,
      },
    ],
  };
}
