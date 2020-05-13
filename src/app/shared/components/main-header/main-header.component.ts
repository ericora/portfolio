import { PathService } from './../../services/path.service';
import { Router, NavigationEnd } from '@angular/router';
import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  links = [
    { title: 'Home', value: 'home' },
    { title: 'Experiences', value: 'experiences' },
    { title: 'Components', value: 'components' },
    { title: 'Dashbord', value: 'dashbord' },
    { title: 'Contact', value: 'contact' },
  ];
  nav: string;
  routerSub$: Subscription;
  constructor(
    private router: Router,
    private pathServ: PathService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.pageMonitor();
  }

  updateURL(page) {
    this.router.navigateByUrl(page);
  }

  pageMonitor() {
    this.nav = this.pathServ.getCurrentPage();
    this.routerSub$ = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.nav = this.pathServ.getCurrentPage();
        console.log(this.nav);
      }
    });
    this.cdRef.detectChanges();
  }

  ngOnDestroy(): void {
    this.routerSub$.unsubscribe();
  }
}
