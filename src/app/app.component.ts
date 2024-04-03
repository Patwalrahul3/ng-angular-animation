import { Component } from '@angular/core';
import { Course } from './models/course.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses: Course[] = [
    {title: 'Angular Complete Cours', isActive: false},
    {title: 'Angular Unit Testing', isActive: false},
    {title: 'Angular RXJS', isActive: false},
  ]

  title = 'ng-style-animation';
}
