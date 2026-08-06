import { InputSignal } from "@angular/core";
import { FormlyFieldConfig, FormlyFieldProps } from "@ngx-formly/core";
import { PassThrough, PassThroughOptions } from "primeng/api";

export interface FormlyPrimengFieldLabelProps {
  hideRequiredMarker?: boolean;
  hideLabel?: boolean;
}

export interface FormlyPrimengFieldHelptextProps {
  helpText?: string;
}

export interface FormlyPrimengFieldFluidProps {
  fluid?: boolean;
}

export interface FormlyPrimengFieldOverlayProps {
  appendTo?: InputSignal<any>;
}

export interface FormlyPrimengFieldPassThroughProps {
  dt?: { [key: string]: any };
  unstyled?: boolean;
  pt?: PassThrough;
  ptOptions?:	PassThroughOptions;
  invalid?:	boolean;
  name?: string;
}

export interface FormlyPrimengFieldAriaProps {
  ariaLabel?: string;
  ariaLabelledBy?: string;
}


export interface FormlyPrimengFieldProps extends 
FormlyFieldProps, 
FormlyPrimengFieldPassThroughProps, 
FormlyPrimengFieldHelptextProps, 
FormlyPrimengFieldFluidProps {}

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