import { ConfigOption } from '@ngx-formly/core';
import { FormlyFieldAutoComplete } from './autocomplete.type';

export function withFormlyFieldAutoComplete(): ConfigOption {
  return {
    types: [
      {
        name: 'autocomplete',
        component: FormlyFieldAutoComplete,
        wrappers: ['field'],
      },
    ],
  };
}
