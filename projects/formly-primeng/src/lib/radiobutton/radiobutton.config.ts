import { ConfigOption } from '@ngx-formly/core';
import { FormlyPrimengRadioButton } from './radiobutton.type';

export function withFormlyPrimengRadioButton(): ConfigOption {
  return {
    types: [
      {
        name: 'radiobutton',
        component: FormlyPrimengRadioButton,
        wrappers: ['field'],
      },
    ],
  };
}
