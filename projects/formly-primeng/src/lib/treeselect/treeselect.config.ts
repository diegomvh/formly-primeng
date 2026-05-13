import { ConfigOption } from '@ngx-formly/core';
import { FormlyFieldTreeSelect } from './treeselect.type';

export function withFormlyFieldTreeSelect(): ConfigOption {
  return {
    types: [
      {
        name: 'treeselect',
        component: FormlyFieldTreeSelect,
        wrappers: ['field'],
      }
    ],
  };
}
