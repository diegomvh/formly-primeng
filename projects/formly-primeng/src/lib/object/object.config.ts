import { ConfigOption } from '@ngx-formly/core';
import { FormlyPrimengObject } from './object.type';

export function withFormlyPrimengObject(): ConfigOption {
  return {
      types: [
        {
          name: 'object',
          component: FormlyPrimengObject,
        },
      ]
  };
}
