import { ConfigOption } from '@ngx-formly/core';
import { FormlyPrimengIftalabelWrapper } from './iftalabel.wrapper';

export function withFormlyPrimengIftalabel(): ConfigOption {
  return {
    wrappers: [
      {
        name: 'iftalabel',
        component: FormlyPrimengIftalabelWrapper,
      },
    ],
  };
}
