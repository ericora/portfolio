import {
  Component,
  OnInit,
  Input,
  Renderer2,
  ElementRef,
  ViewChild,
  AfterViewInit,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
})
export class RadioButtonComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() isChecked = false;
  @Input() activeBac = '#fd9b27';
  @Input() inActiveBac = '#000000';
  @Output() checkAction = new EventEmitter();
  @ViewChild('circle', { static: true }) cricleBtn: ElementRef;
  @ViewChild('back', { static: true }) btnBack: ElementRef;
  constructor(private renderer: Renderer2) {}

  ngOnInit() {}
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
      this.renderer.setStyle(
        this.cricleBtn.nativeElement,
        'left',
        'calc(100% - 2rem - 2px)'
      );
      this.renderer.setStyle(
        this.btnBack.nativeElement,
        'backgroundColor',
        this.activeBac
      );
    } else {
      this.renderer.setStyle(this.cricleBtn.nativeElement, 'left', '2px');
      this.renderer.setStyle(
        this.btnBack.nativeElement,
        'backgroundColor',
        this.inActiveBac
      );
    }
  }
}
