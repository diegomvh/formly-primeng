import { ConfigOption } from '@ngx-formly/core';

import { FormlyPrimengTogglebutton } from './togglebutton.type';

export function withFormlyPrimengTogglebutton(): ConfigOption {
  return {
      types: [
        {
          name: 'togglebutton',
          component: FormlyPrimengTogglebutton,
          wrappers: ['error', 'helptext', 'label', 'field'],
        },
      ],
  };
}