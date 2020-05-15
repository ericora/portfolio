import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  Renderer2,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'drop-select',
  templateUrl: './drop-select.component.html',
  styleUrls: ['./drop-select.component.scss'],
})
export class DropSelectComponent implements OnInit {
  @Input() optionSelected;
  @Input() options;
  @Output() selectOption = new EventEmitter();
  @ViewChild('arrow') arrow: ElementRef;
  @ViewChild('dropBox') dropBox: ElementRef;
  isOpen = false;
  constructor(private render: Renderer2, private elemRef: ElementRef) {}

  ngOnInit(): void {}

  toggleDrop() {
    this.isOpen = !this.isOpen;
  }

  @HostListener('document:click', ['$event'])
  callapseCalender() {
    if (!this.elemRef.nativeElement.contains(event.target) && this.isOpen) {
      this.isOpen = false;
    }
  }
}
