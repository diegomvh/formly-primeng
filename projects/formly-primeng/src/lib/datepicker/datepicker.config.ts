import { FormlyPrimengDatePicker } from './datepicker.type';
import { ConfigOption } from '@ngx-formly/core';

export function withFormlyPrimengDatepicker(): ConfigOption {
  return {
    types: [
      {
        name: 'datepicker',
        component: FormlyPrimengDatePicker,
        wrappers: ['error', 'helptext', 'label', 'field'],
      },
    ],
  };
}
