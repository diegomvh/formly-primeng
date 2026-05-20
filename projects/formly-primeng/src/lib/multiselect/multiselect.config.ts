import { ConfigOption } from '@ngx-formly/core';
import { FormlyPrimengMultiselect } from './multiselect.type';

export function withFormlyPrimengMultiselect(): ConfigOption {
  return {
    types: [
      {
        name: 'multiselect',
        component: FormlyPrimengMultiselect,
        wrappers: ['field'],
      }
    ],
  };
}
