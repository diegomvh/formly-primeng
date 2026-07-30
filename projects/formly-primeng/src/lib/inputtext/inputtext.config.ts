import { ConfigOption } from '@ngx-formly/core';
import { FormlyPrimengInputtext } from './inputtext.type';

export function withFormlyPrimengInputtext(): ConfigOption {
  return {
    types: [
      {
        name: 'input',
        component: FormlyPrimengInputtext,
        wrappers: ['error', 'helptext', 'field'],
      },
      { name: 'inputtext', extends: 'input' },
      { name: 'string', extends: 'input' }
    ],
  };
}
