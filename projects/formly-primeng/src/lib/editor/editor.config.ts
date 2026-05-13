import { ConfigOption } from '@ngx-formly/core';

import { FormlyFieldEditor } from './editor.type';

export function withFormlyFieldEditor(): ConfigOption {
  return {
    types: [
      {
        name: 'editor',
        component: FormlyFieldEditor,
        wrappers: ['field'],
      },
    ]
  }
}
