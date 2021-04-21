import { Component, ChangeDetectionStrategy, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { Calendar } from 'primeng/calendar';
import { Subscription } from 'rxjs';
import { PrimengComponentType } from '../prime.type';

@Component({
  selector: 'formly-primeng-calendar',
  template: `
    <p-calendar
      [view]="to.calendar.view"
      appendTo="body"
      [formControl]="formControl"
      [formlyAttributes]="field"
    >
    </p-calendar>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengCalendar extends PrimengComponentType implements AfterViewInit, OnDestroy {
  @ViewChild(Calendar) calendar!: Calendar;
  ngAfterViewInit() {
    this.bind(this.calendar);
  }
  ngOnDestroy(): void {
    this.unbind();
  }
}
