import { ConfigOption } from '@ngx-formly/core';
import { FormlyPrimengInputnumber } from './inputnumber.type';

export function withFormlyPrimengInputnumber(): ConfigOption {
  return {
    types: [
      {
        name: 'number',
        component: FormlyPrimengInputnumber,
        wrappers: ['error', 'helptext', 'label', 'field'],
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
