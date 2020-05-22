import { AlertService } from './../shared/services/alert.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss'],
})
export class LayoutsComponent implements OnInit {
  alertObs$: Observable<boolean>;
  constructor(private alertService: AlertService) {
    this.alertObs$ = this.alertService.isAlertObs$;
  }

  ngOnInit(): void {}
}
