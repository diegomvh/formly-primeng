import { ConfigOption } from '@ngx-formly/core';
import { FormlyFieldTreeselect } from './treeselect.type';

export function withFormlyPrimengTreeselect(): ConfigOption {
  return {
    types: [
      {
        name: 'treeselect',
        component: FormlyFieldTreeselect,
        wrappers: ['error', 'helptext', 'label', 'field'],
      }
    ],
  };
}
