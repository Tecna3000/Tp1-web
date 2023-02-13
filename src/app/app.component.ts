import {Component, OnInit} from '@angular/core';
import {studentService} from "./services/student.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tp1-web';
  isAuth = false;
  students!: any;
  lastUpdate:Promise<Date> = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 3000
    );
  });


  constructor(private studentService: studentService) {
     setTimeout(
       () => {
         this.isAuth = true;
       }, 4000
     );
   }
  allAbsent() {
    if(confirm('Etes-vous sûr quils sont tous absents ?')) {
      this.studentService.switchOffAll();
    } else {
      return null;
    }
    return null
  }

  allPresent() {
    alert('Ils sont tous là !');
    this.studentService.switchOnAll();
  }


  ngOnInit(): void {
    this.students = this.studentService.students;
  }

}
