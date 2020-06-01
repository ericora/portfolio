import { Observable, Subscription } from 'rxjs';
import { ProjectsService } from './projects.service';
import {
  Component,
  OnInit,
  NgZone,
  OnDestroy,
  AfterViewInit,
} from '@angular/core';
import * as Muuri from 'muuri';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit, OnDestroy, AfterViewInit {
  projects$: Subscription;
  projects: any[];
  masonry;
  constructor(public ps: ProjectsService, private zone: NgZone) {}
  ngAfterViewInit(): void {}

  ngOnInit(): void {
    this.getProjects();
    this.ps.getProjects().subscribe((res) => console.log(res));
  }

  getProjects() {
    this.projects$ = this.ps.getProjects().subscribe((res) => {
      this.projects = res;
      this.muuriMasonry();
    });
  }
  muuriMasonry() {
    this.zone.runOutsideAngular(() =>
      setTimeout(() => {
        this.masonry = new Muuri.default('.grid');
      }, 100)
    );
  }

  ngOnDestroy(): void {
    if (this.masonry) {
      this.masonry.remove('.grid');
    }
    this.projects$.unsubscribe();
  }
}
