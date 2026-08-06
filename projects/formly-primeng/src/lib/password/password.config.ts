import { ConfigOption } from '@ngx-formly/core';

import { FormlyPrimengPassword } from './password.type';

export function withFormlyPrimengPassword(): ConfigOption {
  return {
    types: [
      {
        name: 'password',
        component: FormlyPrimengPassword,
        wrappers: ['error', 'helptext', 'label', 'field'],
      },
    ]
  }
}
