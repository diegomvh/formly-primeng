import { ConfigOption } from '@ngx-formly/core';
import { FormlyFieldObjectWrapper } from './object.wrapper';

export function withFormlyFieldWrapperObject(): ConfigOption {
  return {
      types: [
        {
          name: 'object',
          component: FormlyFieldObjectWrapper,
        },
      ]
  };
}
