import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MoviecardComponent } from './shared/component/moviecard/moviecard.component';
import { StudentComponent } from './shared/component/student/student.component';
import { Student2Component } from './shared/component/student2/student2.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviecardComponent,
    StudentComponent,
    Student2Component,
  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
