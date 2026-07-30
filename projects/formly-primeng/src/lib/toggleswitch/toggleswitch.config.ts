import { ConfigOption } from '@ngx-formly/core';

import { FormlyPrimengToggleswitch } from './toggleswitch.type';

export function withFormlyPrimengToggleswitch(): ConfigOption {
  return {
      types: [
        {
          name: 'toggleswitch',
          component: FormlyPrimengToggleswitch,
          wrappers: ['error', 'helptext', 'field'],
        },
      ],
  };
}