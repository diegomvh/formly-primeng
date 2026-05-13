import { ConfigOption } from '@ngx-formly/core';
import { FormlyFieldRadioButton } from './radiobutton.type';

export function withFormlyFieldRadioButton(): ConfigOption {
  return {
    types: [
      {
        name: 'radiobutton',
        component: FormlyFieldRadioButton,
        wrappers: ['field'],
      },
    ],
  };
}
