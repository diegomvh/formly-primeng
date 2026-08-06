import { ConfigOption } from '@ngx-formly/core';

import { FormlyPrimengSlider } from './slider.type';

export function withFormlyPrimengSlider(): ConfigOption {
  return {
    types: [
      {
        name: 'slider',
        component: FormlyPrimengSlider,
        wrappers: ['error', 'helptext', 'label', 'field'],
      },
    ]
  }
}
