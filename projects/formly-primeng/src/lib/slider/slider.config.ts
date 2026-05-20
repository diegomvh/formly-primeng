import { ConfigOption } from '@ngx-formly/core';

import { FormlyPrimengSlider } from './slieder.type';

export function withFormlyPrimengSlider(): ConfigOption {
  return {
    types: [
      {
        name: 'slider',
        component: FormlyPrimengSlider,
        wrappers: ['field'],
      },
    ]
  }
}
