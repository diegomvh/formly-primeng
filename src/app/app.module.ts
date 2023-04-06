import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyPrimeNGModule } from 'formly-primeng';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { KeyFilterModule } from 'primeng/keyfilter';

import { AppComponent } from './app.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { TreeSelectModule } from 'primeng/treeselect';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyPrimeNGModule,
    FormlyModule.forRoot(),
    InputTextModule,
    TooltipModule,
    KeyFilterModule,
    ButtonModule,
    RadioButtonModule,
    DropdownModule,
    CheckboxModule,
    TreeSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
