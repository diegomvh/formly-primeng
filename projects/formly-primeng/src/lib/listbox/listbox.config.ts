import { ConfigOption } from '@ngx-formly/core';
import { FormlyPrimengListbox } from './listbox.type';

export function withFormlyPrimengListbox(): ConfigOption {
  return {
    types: [
      {
        name: 'listbox',
        component: FormlyPrimengListbox,
        wrappers: ['error', 'helptext', 'field'],
      }
    ],
  };
}
