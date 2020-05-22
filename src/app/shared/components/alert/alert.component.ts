import { AlertService } from './../../services/alert.service';
import {
  Component,
  OnInit,
  Input,
  ElementRef,
  Renderer2,
  AfterViewInit,
  OnDestroy,
  OnChanges,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit, OnDestroy, AfterViewInit {
  message;
  themeOptions = {
    danger: '#F8D7DA',
    warning: '#FEF3CD',
    normal: '#D1ECF1',
    success: '#D4EDDA',
  };
  alertTimeout;
  alertAnimation: any;
  @ViewChild('back') mainback: ElementRef;
  constructor(
    private elemRef: ElementRef,
    private render: Renderer2,
    private alertService: AlertService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.alertMointor();
  }

  alertMointor() {
    this.alertService.alertMsgObs$.subscribe((res) => {
      this.message = res.message;
      this.setTheme(res['theme']);
      this.hideAlert();
      this.showAlert();
      this.cdRef.detectChanges();
    });
  }

  setTheme(theme) {
    if (theme in this.themeOptions) {
      const background = this.themeOptions[theme];
      this.render.setStyle(
        this.mainback.nativeElement,
        'background-color',
        background
      );
    }
  }

  showAlert() {
    this.alertAnimation = this.elemRef.nativeElement.animate(
      [{ opacity: 1 }, { opacity: 0 }],
      {
        duration: 3000,
        fill: 'both',
        ease: 'linear',
      }
    );
    this.alertTimeout = setTimeout(() => {
      this.alertService.closeAlert();
    }, 3000);
  }

  hideAlert() {
    if (this.alertAnimation) {
      clearTimeout(this.alertTimeout);
      this.alertAnimation.finish();
    }
  }

  ngOnDestroy(): void {
    this.hideAlert();
  }
}
