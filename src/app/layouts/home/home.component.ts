import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('skillWin') skillWindow: ElementRef;
  @ViewChild('skillBody') skillBody: ElementRef;
  skillsOnIndex = 0;
  frontEnds = [
    'Angular',
    'JQuery',
    'Node',
    'Html',
    'CSS',
    'SCSS',
    'JavaScript',
    'TypeScript',
    'Bootstrap',
    'Angular Material',
    'Redux',
    'rxjs',
    'ngrx',
    'D3.js',
    'amCharts',
    'Plotly.js',
  ];
  backEnds = [
    'Python',
    'Flask',
    'Java',
    'SQL',
    'Sqlalchemy',
    'MongoDB',
    'Mongoose',
    'Express',
    'RESTful API',
  ];
  constructor() {}

  ngOnInit(): void {}

  prevSkills() {
    let start = this.skillsOnIndex;
    if (this.skillsOnIndex === 0) {
      start = 1.5;
      this.skillsOnIndex = 1;
    } else {
      this.skillsOnIndex--;
    }
    const end = this.skillsOnIndex;
    this.slideSkills(start, end);
  }

  nextSkills() {
    let start = this.skillsOnIndex;
    if (this.skillsOnIndex === 1) {
      start = -0.5;
      this.skillsOnIndex = 0;
    } else {
      this.skillsOnIndex++;
    }
    const end = this.skillsOnIndex;
    this.slideSkills(start, end);
  }

  slideSkills(start, end) {
    const step = this.skillWindow.nativeElement.offsetWidth;
    const startPoint = -(start * step);
    const endPoint = -(end * step);
    this.skillBody.nativeElement.animate(
      [
        { transform: `translateX(${startPoint}px)` },
        { transform: `translateX(${endPoint}px)` },
      ],
      {
        duration: 300,
        fill: 'both',
        ease: 'linear',
      }
    );
  }
}
