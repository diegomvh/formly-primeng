import { ConfigOption } from '@ngx-formly/core';
import { FormlyFieldArrayWrapper } from './array.wrapper';

export function withFormlyFieldWrapperArray(): ConfigOption {
  return {
      types: [
        {
          name: 'array',
          component: FormlyFieldArrayWrapper,
        },
      ]
  };
}
