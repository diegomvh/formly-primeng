import { withFormlyPrimengField } from './field';
import { withFormlyFieldWrapperObject } from './object';
import { withFormlyPrimengArray } from './array';

import { withFormlyPrimengInputtext } from './inputtext';
import { withFormlyPrimengInputnumber } from './inputnumber';
import { withFormlyPrimengTextarea } from './textarea';
import { withFormlyPrimengRadioButton } from './radiobutton';
import { withFormlyFieldCheckbox } from './checkbox';
import { withFormlyPrimengSelect } from './select';
import { withFormlyPrimengDatepicker } from './datepicker';
import { withFormlyPrimengAutoComplete } from './autocomplete';
import { withFormlyPrimengToggleswitch } from './toggleswitch';
import { withFormlyPrimengInputotp } from './inputotp';
import { withFormlyPrimengPassword } from './password';
import { withFormlyPrimengColorpicker } from './colorpicker';
import { withFormlyPrimengEditor } from './editor';
import { withFormlyPrimengSlider } from './slider';
import { withFormlyPrimengRating } from './rating';
import { withFormlyPrimengKnob } from './knob';
import { withFormlyPrimengInputmask } from './inputmask';
import { withFormlyPrimengTreeselect } from './treeselect';
import { withFormlyPrimengTogglebutton } from './togglebutton/togglebutton.config';
import { withFormlyPrimengSelectbutton } from './selectbutton';
import { withFormlyPrimengMultiselect } from './multiselect';
import { withFormlyPrimengListbox } from './listbox/listbox.config';
import { withFormlyPrimengCascadeselect } from './cascadeselect';

export function withFormlyPrimeNG() {
  return [
    withFormlyPrimengAutoComplete(),
    withFormlyPrimengCascadeselect(),
    withFormlyPrimengField(),
    withFormlyFieldWrapperObject(),
    withFormlyPrimengArray(),
    withFormlyPrimengInputtext(),
    withFormlyPrimengInputnumber(),
    withFormlyPrimengInputotp(),
    withFormlyPrimengTextarea(),
    withFormlyPrimengPassword(),
    withFormlyPrimengRadioButton(),
    withFormlyFieldCheckbox(),
    withFormlyPrimengListbox(),
    withFormlyPrimengMultiselect(),
    withFormlyPrimengSelect(),
    withFormlyPrimengSelectbutton(),
    withFormlyPrimengTreeselect(),
    withFormlyPrimengDatepicker(),
    withFormlyPrimengToggleswitch(),
    withFormlyPrimengTogglebutton(),
    withFormlyPrimengColorpicker(),
    withFormlyPrimengEditor(),
    withFormlyPrimengSlider(),
    withFormlyPrimengRating(),
    withFormlyPrimengKnob(),
    withFormlyPrimengInputmask(),
  ];
}