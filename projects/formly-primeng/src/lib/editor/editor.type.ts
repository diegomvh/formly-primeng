import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  OnDestroy,
  AfterViewInit,
  OnInit,
} from '@angular/core';
import { Editor } from 'primeng/editor';
import { PrimengComponentType } from '../prime.type';

@Component({
  selector: 'formly-primeng-editor',
  template: `
    <p-editor
      (onTextChange)="to.onTextChange && to.onTextChange(field, $event)"
      (onSelectionChange)="
        to.onSelectionChange && to.onSelectionChange(field, $event)
      "
      (onInit)="to.onInit && to.onInit(field, $event)"
      [formControl]="formControl"
      [formlyAttributes]="field"
    ></p-editor>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengEditor extends PrimengComponentType {
  @ViewChild(Editor) editor!: Editor;
  getQuill() {
    return this.editor.getQuill();
  }
}
