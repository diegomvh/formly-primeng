import { ConfigOption } from '@ngx-formly/core';
import { FormlyFieldCascadeSelect } from './cascadeselect.type';

export function withFormlyFieldCascadeSelect(): ConfigOption {
  return {
    types: [
      {
        name: 'cascadeselect',
        component: FormlyFieldCascadeSelect,
        wrappers: ['field'],
      },
    ],
  };
}
