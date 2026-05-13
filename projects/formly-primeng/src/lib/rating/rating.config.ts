import { ConfigOption } from '@ngx-formly/core';

import { FormlyFieldRating } from './rating.type';

export function withFormlyFieldRating(): ConfigOption {
  return {
    types: [
      {
        name: 'rating',
        component: FormlyFieldRating,
        wrappers: ['field'],
      },
    ]
  }
}
