import { Component, ChangeDetectionStrategy, AfterViewInit, ViewChild, OnDestroy, OnInit } from '@angular/core';
import { Calendar } from 'primeng/calendar';
import { PrimengComponentType } from '../prime.type';

@Component({
  selector: 'formly-primeng-calendar',
  template: `
    <p-calendar
      [appendTo]="'body'"
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
      [formControl]="formControl"
      [formlyAttributes]="field"
    >
    </p-calendar>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengCalendar extends PrimengComponentType implements AfterViewInit, OnDestroy {
  @ViewChild(Calendar) calendar!: Calendar;
  ngAfterViewInit(): void {
    this.bind(this.calendar);
  }
  ngOnDestroy(): void {
    this.unbind();
  }
}
