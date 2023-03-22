import {
  Component,
  ChangeDetectionStrategy,
  AfterViewInit,
  ViewChild,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Calendar } from 'primeng/calendar';
import { PrimengComponentType } from '../prime.type';

@Component({
  selector: 'formly-primeng-calendar',
  template: `
    <p-calendar
      [appendTo]="'body'"
      [tabindex]="to.tabindex ?? null"
      [disabled]="to.disabled ?? false"
      [required]="to.required ?? false"
      [view]="to.view ?? 'date'"
      [monthNavigator]="to.monthNavigator ?? false"
      [minDate]="to.minDate ?? null"
      [maxDate]="to.maxDate ?? null"
      [maxDateCount]="to.maxDateCount ?? null"
      [yearNavigator]="to.yearNavigator ?? false"
      [yearRange]="to.yearRange ?? '1980:2050'"
      [selectionMode]="to.selectionMode ?? 'single'"
      [readonlyInput]="to.readonlyInput ?? null"
      [numberOfMonths]="to.numberOfMonths ?? 1"
      [showTime]="to.showTime ?? false"
      [showClear]="to.showClear ?? false"
      [dateFormat]="to.dateFormat ?? 'mm/dd/yy'"
      [hourFormat]="to.hourFormat ?? 24"
      [showButtonBar]="to.showButtonBar || false"
      [inline]="to.inline ?? false"
      (onSelect)="to.onSelect && to.onSelect(field, $event)"
      (onClear)="to.onClear && to.onClear(field, $event)"
      (onBlur)="to.onBlur && to.onBlur(field, $event)"
      (onFocus)="to.onFocus && to.onFocus(field, $event)"
      (onClose)="to.onClose && to.onClose(field, $event)"
      (onShow)="to.onShow && to.onShow(field, $event)"
      (onClickOutside)="to.onClickOutside && to.onClickOutside(field, $event)"
      (onInput)="to.onInput && to.onInput(field, $event)"
      (onTodayClick)="to.onTodayClick && to.onTodayClick(field, $event)"
      (onClearClick)="to.onClearClick && to.onClearClick(field, $event)"
      (onMonthChange)="to.onMonthChange && to.onMonthChange(field, $event)"
      (onYearChange)="to.onYearChange && to.onYearChange(field, $event)"
      [formControl]="formControl"
      [formlyAttributes]="field"
    >
    </p-calendar>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengCalendar extends PrimengComponentType {
  @ViewChild(Calendar) calendar!: Calendar;

  toggle() {
    this.calendar.toggle();
  }
}
