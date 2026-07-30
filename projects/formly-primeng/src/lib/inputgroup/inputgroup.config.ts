import { ConfigOption } from '@ngx-formly/core';
import { FormlyPrimengInputgroupWrapper } from './inputgroup.wrapper';

export function withFormlyPrimengInputgroup(): ConfigOption {
  return {
    wrappers: [
      {
        name: 'inputgroup',
        component: FormlyPrimengInputgroupWrapper,
      },
    ],
  };
}
