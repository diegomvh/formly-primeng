import { ConfigOption } from '@ngx-formly/core';
import { FormlyPrimengAutocomplete } from './autocomplete.type';

export function withFormlyPrimengAutocomplete(): ConfigOption {
  return {
    types: [
      {
        name: 'autocomplete',
        component: FormlyPrimengAutocomplete,
        wrappers: ['error', 'helptext', 'label', 'field'],
      },
    ],
  };
}
