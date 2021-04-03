import { Component, ChangeDetectionStrategy, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { Calendar } from 'primeng/calendar';
import { Subscription } from 'rxjs';

@Component({
  selector: 'formly-field-primeng-datepicker',
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
export class FormlyDatePicker extends FieldType implements AfterViewInit, OnDestroy {
  @ViewChild(Calendar) calendar!: Calendar;
  defaultOptions = {
    templateOptions: {
      calendar: {
        view: 'date'
      },
      events: {}
    }
  };
  subscriptions: Subscription[] = [];
  ngAfterViewInit() {
    Object.assign(this.calendar, this.to.calendar);
    Object.entries(this.to.events).forEach(([k, v]) => this.subscriptions.push((<any>this.calendar)[k].subscribe(v)));
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
