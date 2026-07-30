import { ConfigOption } from '@ngx-formly/core';
import { FormlyPrimengHelptextWrapper } from './helptext.wrapper';

export function withFormlyPrimengHelptext(): ConfigOption {
  return {
    wrappers: [
      {
        name: 'helptext',
        component: FormlyPrimengHelptextWrapper,
      },
    ],
  };
}
