import { ConfigOption } from '@ngx-formly/core';
import { FormlyPrimengInputmask } from './inputmask.type';
import { PhoneValidator, PhoneValidatorMessage } from '../validators/phone';

export function withFormlyPrimengInputmask(): ConfigOption {
  return {
    validators: [
      { name: 'phone', validation: PhoneValidator },
    ],
    validationMessages: [
      { name: 'phone', message: PhoneValidatorMessage },
    ],
    types: [
      {
        name: 'inputmask',
        component: FormlyPrimengInputmask,
        wrappers: ['error', 'helptext', 'label', 'field'],
      },
      {
        name: 'phone',
        extends: 'inputmask',
        wrappers: ['error', 'helptext', 'label', 'field', 'inputgroup'],
        defaultOptions: {
          validators: { validation: ['phone'] },
          props: {
            mask: '(999) 999-9999',
            leftAddons: [{ icon: 'pi pi-phone' }],
          },
        },
      },
      {
        name: 'mobile',
        extends: 'inputmask',
        wrappers: ['error', 'helptext', 'label', 'field', 'inputgroup'],
        defaultOptions: {
          validators: { validation: ['phone'] },
          props: {
            mask: '(999) 999-9999',
            leftAddons: [{ icon: 'pi pi-mobile' }],
          },
        },
      },
    ],
  };
}
