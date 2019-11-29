import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    CommonModule
  ],
  exports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    CommonModule
  ]
})
export class CoreModule {
}
