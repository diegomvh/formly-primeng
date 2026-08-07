import { ConfigOption } from '@ngx-formly/core';
import { FormlyPrimengInputtext } from './inputtext.type';
import { EmailValidator, EmailValidatorMessage } from '../validators/email';

export function withFormlyPrimengInputtext(): ConfigOption {
  return {
    validators: [
      { name: 'email', validation: EmailValidator },
    ],
    validationMessages: [
      { name: 'email', message: EmailValidatorMessage },
    ],
    types: [
      {
        name: 'input',
        component: FormlyPrimengInputtext,
        wrappers: ['error', 'helptext', 'label', 'field'],
      },
      { name: 'inputtext', extends: 'input' },
      { name: 'string', extends: 'input' },
      {
        name: 'email',
        extends: 'input',
        wrappers: ['error', 'helptext', 'label', 'field', 'inputgroup'],
        defaultOptions: {
          validators: { validation: ['email'] },
          props: {
            leftAddons: [{ icon: 'pi pi-envelope' }],
          }
        },
      },
    ],
  };
}
