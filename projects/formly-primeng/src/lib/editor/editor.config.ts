import { ConfigOption } from '@ngx-formly/core';

import { FormlyPrimengEditor } from './editor.type';

export function withFormlyPrimengEditor(): ConfigOption {
  return {
    types: [
      {
        name: 'editor',
        component: FormlyPrimengEditor,
        wrappers: ['error', 'helptext', 'field'],
      },
    ]
  }
}
