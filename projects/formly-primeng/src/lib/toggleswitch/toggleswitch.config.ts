import { ConfigOption } from '@ngx-formly/core';

import { FormlyFieldToggleSwitch } from './toggleswitch.type';

export function withFormlyFieldToggleSwitch(): ConfigOption {
  return {
      types: [
        {
          name: 'toggleswitch',
          component: FormlyFieldToggleSwitch,
          wrappers: ['field'],
        },
      ],
  };
}