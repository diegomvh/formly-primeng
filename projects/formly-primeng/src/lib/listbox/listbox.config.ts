import { ConfigOption } from '@ngx-formly/core';
import { FormlyFieldListbox } from './listbox.type';

export function withFormlyFieldListbox(): ConfigOption {
  return {
    types: [
      {
        name: 'listbox',
        component: FormlyFieldListbox,
        wrappers: ['field'],
      }
    ],
  };
}
