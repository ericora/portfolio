import {
  Component,
  OnInit,
  Input,
  HostListener,
  ElementRef,
  Renderer2,
  ViewChildren,
  QueryList,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit, OnChanges {
  @Input() tabs;
  @Input() selectedTab;
  tagShowing = this.selectTab;
  @Output() pickTab = new EventEmitter();
  @ViewChildren('tab_btn') tabBtns!: QueryList<ElementRef>;
  constructor(private elemRef: ElementRef, private render: Renderer2) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectedTab) {
      this.tagShowing = this.selectedTab;
      console.log(this.selectedTab);
    }
  }

  selectTab(tab) {
    this.selectedTab = tab;
    this.pickTab.emit(tab);
  }

  enterTab(tab) {
    this.tagShowing = tab;
    this.tabBtns.toArray().forEach((elRef) => {
      const element = elRef.nativeElement;
      if (event.target !== element) {
        this.render.setStyle(element, 'color', 'gray');
      } else {
        this.render.setStyle(element, 'color', '#000');
      }
    });
  }

  @HostListener('document:mouseover', ['$event.target']) leaveTabs() {
    if (!this.elemRef.nativeElement.contains(event.target)) {
      this.tagShowing = this.selectedTab;
      this.tabBtns.toArray().forEach((elRef) => {
        const element = elRef.nativeElement;
        this.render.setStyle(element, 'color', '#000');
      });
    }
  }
}
