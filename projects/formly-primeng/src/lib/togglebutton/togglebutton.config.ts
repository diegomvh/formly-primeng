import { ConfigOption } from '@ngx-formly/core';

import { FormlyFieldToggleButton } from './togglebutton.type';

export function withFormlyFieldToggleButton(): ConfigOption {
  return {
      types: [
        {
          name: 'togglebutton',
          component: FormlyFieldToggleButton,
          wrappers: ['field'],
        },
      ],
  };
}