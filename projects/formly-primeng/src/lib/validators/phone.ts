import { AbstractControl, ValidationErrors, Validators } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";

export function PhoneValidator(
  control: AbstractControl<any, any>,
  field: FormlyFieldConfig
): ValidationErrors | null {
    console.log(Validators.pattern('[- +()0-9]+')(control));
  return Validators.pattern('[- +()0-9]+')(control) !== null ? { phone: true } : null;
}

export function PhoneValidatorMessage(err: any, field: FormlyFieldConfig) {
  return `Invalid phone number "${field.formControl?.value}"`;
}