import { ConfigOption } from '@ngx-formly/core';
import { FormlyFieldSelectButton } from './selectbutton.type';

export function withFormlyFieldSelectButton(): ConfigOption {
  return {
    types: [
      {
        name: 'selectbutton',
        component: FormlyFieldSelectButton,
        wrappers: ['field'],
      }
    ],
  };
}
