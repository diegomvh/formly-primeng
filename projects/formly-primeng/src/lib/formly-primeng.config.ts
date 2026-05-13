import { withFormlyField } from './field';
import { withFormlyFieldWrapperObject } from './object';
import { withFormlyFieldWrapperArray } from './array';

import { withFormlyFieldInputText } from './inputtext';
import { withFormlyFieldInputNumber } from './inputnumber';
import { withFormlyFieldTextArea } from './textarea';
import { withFormlyFieldRadio } from './radiobutton';
import { withFormlyFieldCheckbox } from './checkbox';
import { withFormlyFieldSelect } from './select';
import { withFormlyFieldDatePicker } from './datepicker';
import { withFormlyFieldAutoComplete } from './autocomplete';
import { withFormlyFieldToggleSwitch } from './toggleswitch';
import { withFormlyFieldInputOtp } from './inputotp';
import { withFormlyFieldPassword } from './password';
import { withFormlyFieldColorPicker } from './colorpicker';
import { withFormlyFieldEditor } from './editor';
import { withFormlyFieldSlider } from './slider';
import { withFormlyFieldRating } from './rating';
import { withFormlyFieldKnob } from './knob';
import { withFormlyFieldInputMask } from './inputmask';
import { withFormlyFieldTreeSelect } from './treeselect';
import { withFormlyFieldToggleButton } from './togglebutton/togglebutton.config';
import { withFormlyFieldSelectButton } from './selectbutton';
import { withFormlyFieldMultiSelect } from './multiselect';
import { withFormlyFieldListbox } from './listbox/listbox.config';
import { withFormlyFieldCascadeSelect } from './cascadeselect';

export function withFormlyPrimeNG() {
  return [
    withFormlyFieldAutoComplete(),
    withFormlyFieldCascadeSelect(),
    withFormlyField(),
    withFormlyFieldWrapperObject(),
    withFormlyFieldWrapperArray(),
    withFormlyFieldInputText(),
    withFormlyFieldInputNumber(),
    withFormlyFieldInputOtp(),
    withFormlyFieldTextArea(),
    withFormlyFieldPassword(),
    withFormlyFieldRadio(),
    withFormlyFieldCheckbox(),
    withFormlyFieldListbox(),
    withFormlyFieldMultiSelect(),
    withFormlyFieldSelect(),
    withFormlyFieldSelectButton(),
    withFormlyFieldTreeSelect(),
    withFormlyFieldDatePicker(),
    withFormlyFieldToggleSwitch(),
    withFormlyFieldToggleButton(),
    withFormlyFieldColorPicker(),
    withFormlyFieldEditor(),
    withFormlyFieldSlider(),
    withFormlyFieldRating(),
    withFormlyFieldKnob(),
    withFormlyFieldInputMask(),
  ];
}