import { ConfigOption } from '@ngx-formly/core';
import { FormlyPrimengCheckbox } from './checkbox.type';

export function withFormlyPrimengCheckbox(): ConfigOption {
  return {
    types: [
      {
        name: 'checkbox',
        component: FormlyPrimengCheckbox,
        wrappers: ['field'],
      },
      {
        name: 'boolean',
        extends: 'checkbox',
      },
    ],
  };
}
