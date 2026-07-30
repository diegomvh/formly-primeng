import { ConfigOption } from '@ngx-formly/core';
import { FormlyPrimengFloatlabelWrapper } from './floatlabel.wrapper';

export function withFormlyPrimengFloatlabel(): ConfigOption {
  return {
    wrappers: [
      {
        name: 'floatlabel',
        component: FormlyPrimengFloatlabelWrapper,
      },
    ],
  };
}
