import {Component} from '@angular/core';
import { studentService } from './services/student.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Student-app';
  secondes : number | any;

}

