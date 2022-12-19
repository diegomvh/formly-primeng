import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { FileUpload } from 'primeng/fileupload';
import { PrimengComponentType } from '../prime.type';

@Component({
  selector: 'formly-primeng-fileUpload',
  template: `
    <p-fileUpload
      [name]="to.name ?? null" 
      [url]="to.url ?? null" 
      [method]="to.method ?? 'post'" 
      [multiple]="to.multiple ?? false"
      [accept]="to.accept" 
      [customUpload]="to.customUpload ?? false"
      [disabled]="to.disabled ?? false"
      [auto]="to.auto ?? false"
      [maxFileSize]="to.maxFileSize ?? null"
      [fileLimit]="to.fileLimit ?? null"
      [tabindex]="to.tabindex ?? null"
      [withCredentials]="to.withCredentials ?? false" 
      [mode]="to.mode ?? 'advanced'" 
      (onBeforeUpload)="to.onBeforeUpload && to.onBeforeUpload(field, $event)"
      (onSend)="to.onSend && to.onSend(field, $event)"
      (onUpload)="to.onUpload && to.onUpload(field, $event)"
      (onError)="to.onError && to.onError(field, $event)"
      (onClear)="to.onClear && to.onClear(field, $event)"
      (onRemove)="to.onRemove && to.onRemove(field, $event)"
      (onSelect)="to.onSelect && to.onSelect(field, $event)"
      (onProgress)="to.onProgress && to.onProgress(field, $event)"
      (uploadHandler)="uploadFiles(field, $event)"
    >
    </p-fileUpload>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengFileUpload extends PrimengComponentType {
  @ViewChild(FileUpload) fileUpload!: FileUpload;

  uploadFiles(field: any, event: {files: File[]}) {
    if (this.to.uploadHandler !== undefined) {
      this.to.uploadHandler(field, event);
    }
    this.formControl.patchValue([
      ...(this.formControl.value || []),
      ...event.files
    ]);
    this.fileUpload.clear();
  }
}
