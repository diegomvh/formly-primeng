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
      [tabindex]="to.tabindex || null"
      [disabled]="to.disabled || false"
      [required]="to.required || false"
      [view]="to.view || 'date'"
      [monthNavigator]="to.monthNavigator || false"
      [yearNavigator]="to.yearNavigator || false"
      [yearRange]="to.yearRange || '1980:2050'"
      [selectionMode]="to.selectionMode || 'single'"
      [readonlyInput]="to.readonlyInput || null"
      [numberOfMonths]="to.numberOfMonths || 1"
      [showTime]="to.showTime || false"
      [dateFormat]="to.dateFormat || 'mm/dd/yy'"
      [hourFormat]="to.hourFormat || 24"
      (onSelect)="to.onSelect && to.onSelect(field, $event)"
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
