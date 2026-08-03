import { ConfigOption } from '@ngx-formly/core';
import { FormlyPrimengArray } from './array.type';

export function withFormlyPrimengArray(): ConfigOption {
  return {
    types: [
      {
        name: 'array',
        component: FormlyPrimengArray,
        wrappers: ['error'],
      },
    ],
  };
}
