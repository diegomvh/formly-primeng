import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  autoComplete$ = new EventEmitter<any>();
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'p-fluid p-formgrid grid',
      fieldGroup: [
        {
          key: 'input',
          type: 'input',
          className: 'col-4',
          templateOptions: {
            label: 'Input',
            placeholder: 'Input placeholder',
            required: true,
          },
        },
        {
          key: 'checkbox',
          type: 'checkbox',
          className: 'col-2',
          templateOptions: {
            label: 'Checkbox',
            binary: true,
          },
        },
        {
          key: 'select',
          type: 'dropdown',
          className: 'col-2',
          templateOptions: {
            label: 'Select',
            placeholder: 'Select placeholder',
            required: true,
            options: [
              { label: 'Option 1', value: '1' },
              { label: 'Option 2', value: '2' },
              { label: 'Option 3', value: '3' },
            ],
          },
        },
        {
          key: 'autoComplete',
          type: 'autoComplete',
          className: 'col-2',
          templateOptions: {
            label: 'Auto Complete',
            valueProp: 'data',
            dropdown: true,
            options: this.autoComplete$,
            completeMethod: () => {
              this.autoComplete$.emit([
                {
                  label: 'Scarface',
                  icon: 'pi pi-video',
                  data: 'Scarface Movie',
                },
                {
                  label: 'Serpico',
                  icon: 'pi pi-file-video',
                  data: 'Serpico Movie',
                },
              ]);
            },
          },
        },
        {
          key: 'treeSelect',
          type: 'treeSelect',
          className: 'col-2',
          templateOptions: {
            label: 'Tree Select',
            placeholder: 'Select placeholder',
            required: true,
            valueProp: 'data',
            options: of([
              {
                label: 'Documents',
                data: 'Documents Folder',
                expandedIcon: 'pi pi-folder-open',
                collapsedIcon: 'pi pi-folder',
                children: [
                  {
                    label: 'Work',
                    data: 'Work Folder',
                    expandedIcon: 'pi pi-folder-open',
                    collapsedIcon: 'pi pi-folder',
                    children: [
                      {
                        label: 'Expenses.doc',
                        icon: 'pi pi-file',
                        data: 'Expenses Document',
                      },
                      {
                        label: 'Resume.doc',
                        icon: 'pi pi-file',
                        data: 'Resume Document',
                      },
                    ],
                  },
                  {
                    label: 'Home',
                    data: 'Home Folder',
                    expandedIcon: 'pi pi-folder-open',
                    collapsedIcon: 'pi pi-folder',
                    children: [
                      {
                        label: 'Invoices.txt',
                        icon: 'pi pi-file',
                        data: 'Invoices for this month',
                      },
                    ],
                  },
                ],
              },
              {
                label: 'Pictures',
                data: 'Pictures Folder',
                expandedIcon: 'pi pi-folder-open',
                collapsedIcon: 'pi pi-folder',
                children: [
                  {
                    label: 'barcelona.jpg',
                    icon: 'pi pi-image',
                    data: 'Barcelona Photo',
                  },
                  {
                    label: 'logo.jpg',
                    icon: 'pi pi-file',
                    data: 'PrimeFaces Logo',
                  },
                  {
                    label: 'primeui.png',
                    icon: 'pi pi-image',
                    data: 'PrimeUI Logo',
                  },
                ],
              },
              {
                label: 'Movies',
                data: 'Movies Folder',
                expandedIcon: 'pi pi-folder-open',
                collapsedIcon: 'pi pi-folder',
                children: [
                  {
                    label: 'Al Pacino',
                    data: 'Pacino Movies',
                    children: [
                      {
                        label: 'Scarface',
                        icon: 'pi pi-video',
                        data: 'Scarface Movie',
                      },
                      {
                        label: 'Serpico',
                        icon: 'pi pi-file-video',
                        data: 'Serpico Movie',
                      },
                    ],
                  },
                  {
                    label: 'Robert De Niro',
                    data: 'De Niro Movies',
                    children: [
                      {
                        label: 'Goodfellas',
                        icon: 'pi pi-video',
                        data: 'Goodfellas Movie',
                      },
                      {
                        label: 'Untouchables',
                        icon: 'pi pi-video',
                        data: 'Untouchables Movie',
                      },
                    ],
                  },
                ],
              },
            ]),
          },
        },
        {
          key: 'radio',
          type: 'radioButton',
          className: 'col-2',
          templateOptions: {
            label: 'Radio',
            required: true,
            options: [
              { label: 'Option 1', value: '1' },
              { label: 'Option 2', value: '2' },
            ],
          },
        },
        {
          key: 'textarea',
          type: 'textarea',
          className: 'col-12',
          templateOptions: {
            label: '',
            placeholder: 'Textarea placeholder',
            required: true,
          },
        },
        {
          key: 'editor',
          type: 'editor',
          className: 'col-12',
          templateOptions: {
            label: '',
            placeholder: 'Textarea placeholder',
            required: true,
          },
        },
      ],
    },
  ];

  onSubmit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model, null, 2));
    }
  }

  setValue(): void {
    this.model = { ...this.model, treeSelect: 'Scarface Movie' };
  }
}
