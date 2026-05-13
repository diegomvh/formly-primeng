import { ConfigOption } from '@ngx-formly/core';
import { FormlyFieldInputNumber } from './inputnumber.type';

export function withFormlyFieldInputNumber(): ConfigOption {
  return {
    types: [
      {
        name: 'number',
        component: FormlyFieldInputNumber,
        wrappers: ['field'],
      },
      { name: 'inputnumber', extends: 'number' },
      { name: 'integer', extends: 'number' },
      {
        name: 'decimal',
        extends: 'number',
        defaultOptions: {
          props: {
            mode: 'decimal',
          },
        },
      },
      {
        name: 'currency',
        extends: 'number',
        defaultOptions: {
          props: {
            mode: 'currency',
          },
        },
      },
    ],
  };
}
