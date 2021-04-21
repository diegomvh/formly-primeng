import { NgModule } from '@angular/core';
import { FormlyFormFieldModule } from './form-field/form-field.module';
import { PrimengInputModule } from './input/input.module';
import { PrimengTextAreaModule } from './textarea/textarea.module';
import { PrimengCheckboxModule } from './checkbox/checkbox.module';
import { PrimengDropdownModule } from './dropdown/dropdown.module';
import { PrimengColorPickerModule } from './colorpicker/colorpicker.module';
import { FormlyNullModule } from './null/null.module';
import { FormlyArrayModule } from './array/array.module';
import { FormlyObjectModule } from './object/object.module';
import { FormlyMultiSchemaModule } from './multischema/multischema.module';
import { FormlyInputGroupModule } from './inputgroup/inputgroup.module';
import { PrimengRadioButtonModule } from './radio/radio.module';
import { PrimengCalendarModule } from './calendar/calendar.module';
import { PrimengEditorModule } from './editor/editor.module';

@NgModule({
  imports: [
    FormlyFormFieldModule,
    FormlyInputGroupModule,
    FormlyNullModule,
    FormlyArrayModule,
    FormlyObjectModule,
    FormlyMultiSchemaModule,
    PrimengInputModule,
    PrimengTextAreaModule,
    PrimengRadioButtonModule,
    PrimengCheckboxModule,
    PrimengDropdownModule,
    PrimengCalendarModule,
    PrimengColorPickerModule,
    PrimengEditorModule,
  ],
})
export class FormlyPrimeNGModule {}
