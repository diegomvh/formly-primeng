import { ConfigOption } from '@ngx-formly/core';
import { FormlyFieldInputText } from './inputtext.type';

export function withFormlyFieldInputText(): ConfigOption {
  return {
    types: [
      {
        name: 'input',
        component: FormlyFieldInputText,
        wrappers: ['field'],
      },
      { name: 'inputtext', extends: 'input' },
      { name: 'string', extends: 'input' }
    ],
  };
}
