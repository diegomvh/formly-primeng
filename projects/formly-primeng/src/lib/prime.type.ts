import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { Subscription } from 'rxjs';

export class PrimengComponentType extends FieldType {
  defaultOptions = {
    templateOptions: {
      properties: {},
      events: {}
    }
  };
  subscriptions: Subscription[] = [];
  bind(prime: any) {
    Object.assign(prime, this.to.properties);
    Object.entries(this.to.events).forEach(([k, v]) => this.subscriptions.push(prime[k].subscribe(v)));
  }
  unbind(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
