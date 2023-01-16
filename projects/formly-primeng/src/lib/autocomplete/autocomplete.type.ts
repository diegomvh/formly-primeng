import { Component, ChangeDetectionStrategy, ViewChild, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AutoComplete } from 'primeng/autocomplete';
import { PrimengComponentType } from '../prime.type';

@Component({
  selector: 'formly-primeng-autoComplete',
  template: `
    <p-autoComplete
      [placeholder]="to.placeholder"
      [tabindex]="to.tabindex ?? null"
      [disabled]="to.disabled ?? false"
      [required]="to.required ?? false"
      [showEmptyMessage]="to.showEmptyMessage ?? false"
      [emptyMessage]="to.emptyMessage"
      [suggestions]="to.options | formlyAutoCompleteOptions: field | async"
      [multiple]="to.multiple ?? false"
      [showClear]="to.showClear ?? false"
      [dropdown]="to.dropdown ?? false"
      [field]="'label'"
      [forceSelection]="to.forceSelection ?? false"
      [autofocus]="to.autofocus ?? false"
      (completeMethod)="to.completeMethod && to.completeMethod(field, $event)"
      (onFocus)="to.onFocus && to.onFocus(field, $event)"
      (onBlur)="to.onBlur && to.onBlur(field, $event)"
      (onKeyUp)="to.onKeyUp && to.onKeyUp(field, $event)"
      (onSelect)="to.onSelect && to.onSelect(field, $event)"
      (onUnselect)="to.onUnselect && to.onUnselect(field, $event)"
      (onDropdownClick)="
        to.onDropdownClick && to.onDropdownClick(field, $event)
      "
      (onClear)="to.onClear && to.onClear(field, $event)"
      (onShow)="to.onShow && to.onShow(field, $event)"
      (onHide)="to.onHide && to.onHide(field, $event)"
      [formControl]="autoCompleteControl"
      [formlyAttributes]="field"
    >
    </p-autoComplete>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengAutoComplete extends PrimengComponentType implements OnInit {
  autoCompleteControl = new FormControl();
  @ViewChild(AutoComplete) autoComplete!: AutoComplete;
  defaultOptions = {
    templateOptions: {
      options: [],
    },
  };

  ngOnInit(): void {
    this.autoCompleteControl.valueChanges.subscribe((node) => { 
      if (node?.value !== this.formControl.value) {
        this.formControl.setValue(node?.value);
      }
    });
    this.formControl.valueChanges.subscribe((value) => { 
      if (value !== this.autoCompleteControl.value?.value) {
        let suggestion = this.autoComplete.suggestions.find(s => s.value === value);
        this.autoCompleteControl.setValue(suggestion);
      }
    });
  }
}
