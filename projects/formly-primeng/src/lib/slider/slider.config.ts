import { ConfigOption } from '@ngx-formly/core';

import { FormlyFieldSlider } from './slieder.type';

export function withFormlyFieldSlider(): ConfigOption {
  return {
    types: [
      {
        name: 'slider',
        component: FormlyFieldSlider,
        wrappers: ['field'],
      },
    ]
  }
}
