import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Output,
  Input,
  EventEmitter,
  Renderer2,
  SimpleChanges,
  OnChanges,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'radio-material',
  templateUrl: './radio-material.component.html',
  styleUrls: ['./radio-material.component.scss'],
})
export class RadioMaterialComponent
  implements OnInit, OnChanges, AfterViewInit {
  @Input() isChecked = false;
  @Input() activeBac;
  @Input() inActiveBac;
  @Output() checkAction = new EventEmitter();
  @ViewChild('circle', { static: true }) cricleBtn: ElementRef;
  @ViewChild('back', { static: true }) btnBack: ElementRef;
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.isChecked) {
      this.initCheck();
    }
  }

  ngAfterViewInit() {
    this.initCheck();
  }

  toggleCheck() {
    this.isChecked = !this.isChecked;
    this.checkAction.next(this.isChecked);
    this.initCheck();
  }

  initCheck() {
    if (this.isChecked) {
      const backWidth = this.btnBack.nativeElement.offsetWidth;
      const circleWidth = this.cricleBtn.nativeElement.offsetWidth;
      const range = backWidth - circleWidth;
      this.renderer.setStyle(
        this.cricleBtn.nativeElement,
        'left',
        `${range}px`
      );
      this.renderer.setStyle(
        this.btnBack.nativeElement,
        'backgroundColor',
        this.activeBac
      );
    } else {
      this.renderer.setStyle(this.cricleBtn.nativeElement, 'left', '0');
      this.renderer.setStyle(
        this.btnBack.nativeElement,
        'backgroundColor',
        this.inActiveBac
      );
    }
  }
}
