import { ConfigOption } from '@ngx-formly/core';
import { FormlyPrimengLabelWrapper } from './label.wrapper';

export function withFormlyPrimengLabel(): ConfigOption {
  return {
    wrappers: [
      {
        name: 'label',
        component: FormlyPrimengLabelWrapper,
      },
    ],
  };
}
