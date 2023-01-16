import { Component, ChangeDetectionStrategy, ViewChild, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TreeSelect } from 'primeng/treeselect';
import { PrimengComponentType } from '../prime.type';

@Component({
  selector: 'formly-primeng-treeselect',
  template: `
    <p-treeSelect
      appendTo="body"
      [placeholder]="to.placeholder"
      [options]="to.options | formlyTreeSelectOptions: field | async"
      [display]="to.display || 'comma'"
      [selectionMode]="to.selectionMode || 'single'"
      [showClear]="to.showClear ?? false"
      [metaKeySelection]="to.metaKeySelection ?? true"
      [emptyMessage]="to.emptyMessage || 'No results found'"
      [propagateSelectionDown]="to.propagateSelectionDown ?? true"
      [propagateSelectionUp]="to.propagateSelectionUp ?? true"
      [disabled]="to.disabled"
      (onShow)="to.onShow && to.onShow(field, $event)"
      (onHide)="to.onHide && to.onHide(field, $event)"
      (onNodeSelect)="to.onNodeSelect && to.onNodeSelect(field, $event)"
      (onNodeUnselect)="to.onNodeUnselect && to.onNodeUnselect(field, $event)"
      (onNodeExpand)="to.onNodeExpand && to.onNodeExpand(field, $event)"
      (onNodeCollapse)="to.onNodeCollapse && to.onNodeCollapse(field, $event)"
      [formControl]="treeSelectControl"
      [formlyAttributes]="field"
      treeSelect
    >
    </p-treeSelect>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengTreeSelect extends PrimengComponentType implements OnInit {
  treeSelectControl = new FormControl();
  @ViewChild(TreeSelect) treeSelect!: TreeSelect;
  defaultOptions = {
    templateOptions: {
      options: [],
    },
  };

  ngOnInit(): void {
    this.treeSelectControl.valueChanges.subscribe((node) => { 
      if (node?.value !== this.formControl.value) {
        this.formControl.setValue(node?.value);
      }
    });
    this.formControl.valueChanges.subscribe((value) => { 
      if (value !== this.treeSelectControl.value?.value) {
        let node = this.findNode(value, this.treeSelect.options);
        this.treeSelectControl.setValue(node);
      }
    });
  }

  findNode(value: any, options?: any[]): any {
    if (!options || options.length === 0) return undefined;
    let n = options.find(o => o.value === value);
    if (n) return n;
    for (let ch of options) {
      let cn = this.findNode(value, ch.children);
      if (cn) return cn;
    }
    return undefined;
  }
}
