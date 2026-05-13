import { ConfigOption } from '@ngx-formly/core';

import { FormlyFieldPassword } from './password.type';

export function withFormlyFieldPassword(): ConfigOption {
  return {
    types: [
      {
        name: 'password',
        component: FormlyFieldPassword,
        wrappers: ['field'],
      },
    ]
  }
}
