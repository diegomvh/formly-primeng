import { Component, ChangeDetectionStrategy, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { Editor } from 'primeng/editor';
import { Subscription } from 'rxjs';
import { PrimengComponentType } from '../prime.type';

@Component({
  selector: 'formly-primeng-editor',
  template: `
    <p-editor
      [formControl]="formControl"
      [formlyAttributes]="field"
    ></p-editor>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengEditor extends PrimengComponentType implements OnDestroy, AfterViewInit {
  @ViewChild(Editor) editor!: Editor;
  ngAfterViewInit() {
    this.bind(this.editor);
  }
  ngOnDestroy(): void {
    this.unbind();
  }
}
