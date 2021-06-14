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
    Object.entries(this.to.events).forEach(([name, callback]) => {
      this.subscriptions.push(prime[name].subscribe((event: any) => (callback as Function)(this, event)));
    });
  }
  unbind(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
