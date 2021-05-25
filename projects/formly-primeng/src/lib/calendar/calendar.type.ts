import { Component, ChangeDetectionStrategy, AfterViewInit, ViewChild, OnDestroy, OnInit } from '@angular/core';
import { Calendar } from 'primeng/calendar';
import { PrimengComponentType } from '../prime.type';

@Component({
  selector: 'formly-primeng-calendar',
  template: `
    <p-calendar
      [view]="to.properties.view"
      appendTo="body"
      [formControl]="formControl"
      [formlyAttributes]="field"
    >
    </p-calendar>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengCalendar extends PrimengComponentType implements OnInit, OnDestroy {
  @ViewChild(Calendar, {static: true}) calendar!: Calendar;
  ngOnInit(): void {
    this.bind(this.calendar);
  }
  ngOnDestroy(): void {
    this.unbind();
  }
}
