import { ConfigOption } from '@ngx-formly/core';
import { FormlyPrimengAutoComplete } from './autocomplete.type';

export function withFormlyPrimengAutoComplete(): ConfigOption {
  return {
    types: [
      {
        name: 'autocomplete',
        component: FormlyPrimengAutoComplete,
        wrappers: ['field'],
      },
    ],
  };
}
