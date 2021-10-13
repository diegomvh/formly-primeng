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
    <p-editor [formControl]="formControl" [formlyAttributes]="field"></p-editor>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengEditor extends PrimengComponentType {
  @ViewChild(Editor, { static: true }) editor!: Editor;
}
