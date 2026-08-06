import { ConfigOption } from '@ngx-formly/core';
import { FormlyPrimengCascadeselect } from './cascadeselect.type';

export function withFormlyPrimengCascadeselect(): ConfigOption {
  return {
    types: [
      {
        name: 'cascadeselect',
        component: FormlyPrimengCascadeselect,
        wrappers: ['error', 'helptext', 'label', 'field'],
      },
    ],
  };
}
