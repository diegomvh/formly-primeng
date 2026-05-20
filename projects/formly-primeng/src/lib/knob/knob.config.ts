import { ConfigOption } from '@ngx-formly/core';

import { FormlyPrimengKnob } from './knob.type';

export function withFormlyPrimengKnob(): ConfigOption {
  return {
    types: [
      {
        name: 'knob',
        component: FormlyPrimengKnob,
        wrappers: ['field'],
      },
    ]
  }
}
