import { ConfigOption } from '@ngx-formly/core';
import { FormlyFieldMultiSelect } from './multiselect.type';

export function withFormlyFieldMultiSelect(): ConfigOption {
  return {
    types: [
      {
        name: 'multiselect',
        component: FormlyFieldMultiSelect,
        wrappers: ['field'],
      }
    ],
  };
}
