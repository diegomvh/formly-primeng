import { ConfigOption } from '@ngx-formly/core';

import { FormlyPrimengRating } from './rating.type';

export function withFormlyPrimengRating(): ConfigOption {
  return {
    types: [
      {
        name: 'rating',
        component: FormlyPrimengRating,
        wrappers: ['error', 'helptext', 'label', 'field'],
      },
    ]
  }
}
