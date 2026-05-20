import { ConfigOption } from '@ngx-formly/core';
import { FormlyPrimengArrayWrapper } from './array.wrapper';

export function withFormlyPrimengArray(): ConfigOption {
  return {
      types: [
        {
          name: 'array',
          component: FormlyPrimengArrayWrapper,
        },
      ]
  };
}
