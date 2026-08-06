import { ConfigOption } from '@ngx-formly/core';
import { FormlyPrimengIconfieldWrapper } from './iconfield.wrapper';

export function withFormlyPrimengIconfield(): ConfigOption {
  return {
    wrappers: [
      {
        name: 'iconfield',
        component: FormlyPrimengIconfieldWrapper,
      },
    ],
  };
}
