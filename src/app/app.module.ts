import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import {studentService} from "./services/student.service";
import { AuthComponent } from './auth/auth.component';
import { StudentViewComponent } from './student-view/student-view.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {AuthService} from "./services/auth.service";
import { SingleStudentComponent } from './single-student/single-student.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    AuthComponent,
    StudentViewComponent,
    SingleStudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [studentService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
