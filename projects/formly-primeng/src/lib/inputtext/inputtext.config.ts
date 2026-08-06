import { ConfigOption, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyPrimengInputtext } from './inputtext.type';
import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';

export function EmailValidator(
  control: AbstractControl,
  field: FormlyFieldConfig
): ValidationErrors | null {
  return Validators.email(control);
}

export function EmailValidatorMessage(err: any, field: FormlyFieldConfig) {
  return `Invalid email "${field.formControl?.value}"`;
}

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
