import { withFormlyPrimengField } from './field';
import { withFormlyPrimengFloatlabel } from './floatlabel';
import { withFormlyPrimengIftalabel } from './iftalabel';
import { withFormlyPrimengHelptext } from './helptext';
import { withFormlyPrimengInputgroup } from './inputgroup';
import { withFormlyPrimengError } from './error';
import { withFormlyPrimengLabel } from './label';
import { withFormlyPrimengIconfield } from './iconfield';

import { withFormlyPrimengObject } from './object';
import { withFormlyPrimengArray } from './array';

import { withFormlyPrimengInputtext } from './inputtext';
import { withFormlyPrimengInputnumber } from './inputnumber';
import { withFormlyPrimengTextarea } from './textarea';
import { withFormlyPrimengRadioButton } from './radiobutton';
import { withFormlyFieldCheckbox } from './checkbox';
import { withFormlyPrimengSelect } from './select';
import { withFormlyPrimengDatepicker } from './datepicker';
import { withFormlyPrimengAutocomplete } from './autocomplete';
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
    withFormlyPrimengField(),
    withFormlyPrimengFloatlabel(),
    withFormlyPrimengIftalabel(),
    withFormlyPrimengHelptext(),
    withFormlyPrimengInputgroup(),
    withFormlyPrimengError(),
    withFormlyPrimengLabel(),
    withFormlyPrimengIconfield(),
    withFormlyPrimengArray(),
    withFormlyPrimengObject(),

    withFormlyPrimengAutocomplete(),
    withFormlyPrimengCascadeselect(),
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