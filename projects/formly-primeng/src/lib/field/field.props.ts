import { FormlyFieldConfig, FormlyFieldProps } from "@ngx-formly/core";

export interface FormlyPrimengFieldLabelProps {
  hideRequiredMarker?: boolean;
  floatLabel?: boolean;
  floatLabelVariant?: 'in' | 'over' | 'on';
  hideLabel?: boolean;
}

export interface FormlyPrimengFieldHelpTextProps {
  helpText?: boolean;
  hideHelpText?: boolean;
}

export interface FormlyPrimengFieldProps extends FormlyFieldProps, FormlyPrimengFieldLabelProps, FormlyPrimengFieldHelpTextProps {}

export interface FormlyPrimengFieldEventProps<C> {
  onFocus?: (field: FormlyFieldConfig<C>, event?: any) => void;
  onBlur?: (field: FormlyFieldConfig<C>, event?: any) => void;
  onKeyUp?: (field: FormlyFieldConfig<C>, event?: any) => void;
  onKeyDown?: (field: FormlyFieldConfig<C>, event?: any) => void;
  onClick?: (field: FormlyFieldConfig<C>, event?: any) => void;
  onChange?: (field: FormlyFieldConfig<C>, event?: any) => void;
  onShow?: (field: FormlyFieldConfig<C>, event?: any) => void;
  onHide?: (field: FormlyFieldConfig<C>, event?: any) => void;
}