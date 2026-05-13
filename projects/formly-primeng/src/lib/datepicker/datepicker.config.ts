import { FormlyFieldDatePicker } from './datepicker.type';
import { ConfigOption } from '@ngx-formly/core';

export function withFormlyFieldDatePicker(): ConfigOption {
  return {
    types: [
      {
        name: 'datepicker',
        component: FormlyFieldDatePicker,
        wrappers: ['field'],
      },
    ],
  };
}
