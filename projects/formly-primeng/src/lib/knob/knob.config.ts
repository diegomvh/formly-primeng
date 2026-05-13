import { ConfigOption } from '@ngx-formly/core';

import { FormlyFieldKnob } from './knob.type';

export function withFormlyFieldKnob(): ConfigOption {
  return {
    types: [
      {
        name: 'knob',
        component: FormlyFieldKnob,
        wrappers: ['field'],
      },
    ]
  }
}
