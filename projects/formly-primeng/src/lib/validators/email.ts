import { AbstractControl, ValidationErrors, Validators } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";

export function EmailValidator(
  control: AbstractControl,
  field: FormlyFieldConfig
): ValidationErrors | null {
    console.log(Validators.email(control));
  return Validators.email(control);
}

export function EmailValidatorMessage(err: any, field: FormlyFieldConfig) {
  return `Invalid email "${field.formControl?.value}"`;
}
