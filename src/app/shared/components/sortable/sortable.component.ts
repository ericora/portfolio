import {
  Component,
  OnInit,
  Input,
  forwardRef,
  EventEmitter,
  Output,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { DraggableItem } from './draggable-item';
import { DraggableItemService } from './draggable-item.service';

@Component({
  selector: 'app-sortable',
  templateUrl: './sortable.component.html',
  styleUrls: ['./sortable.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SortableComponent),
      multi: true,
    },
  ],
})
export class SortableComponent implements ControlValueAccessor {
  private static globalZoneIndex = 0;
  @Input() fieldName: string;
  @Output() onChange: EventEmitter<any[]> = new EventEmitter<any[]>();
  activeItem = -1;
  /* tslint:disable-next-line: no-any */
  onTouched: any = Function.prototype;
  /* tslint:disable-next-line: no-any */
  onChanged: any = Function.prototype;
  private transfer: DraggableItemService;
  private currentZoneIndex: number;
  private _items: SortableItem[];
  showPlaceholder = false;
  get items(): SortableItem[] {
    return this._items;
  }

  set items(value: SortableItem[]) {
    this._items = value;
    const out = this.items.map((x: SortableItem) => x.initData);
    this.onChanged(out);
    this.onChange.emit(out);
  }

  constructor(transfer: DraggableItemService) {
    this.transfer = transfer;
    this.currentZoneIndex = SortableComponent.globalZoneIndex++;
    this.transfer
      .onCaptureItem()
      .subscribe((item: DraggableItem) => this.onDrop(item));
  }
  onItemDragstart(event: DragEvent, item: SortableItem, i: number): void {
    this.initDragstartEvent(event);
    this.onTouched();
    this.transfer.dragStart({
      event,
      item,
      i,
      initialIndex: i,
      lastZoneIndex: this.currentZoneIndex,
      overZoneIndex: this.currentZoneIndex,
    });
  }

  onItemDragover(event: DragEvent, i: number): void {
    if (!this.transfer.getItem()) {
      return;
    }
    event.preventDefault();
    const dragItem = this.transfer.captureItem(
      this.currentZoneIndex,
      this.items.length
    );

    /* tslint:disable-next-line: no-any */
    let newArray: any[] = [];

    if (!this.items.length) {
      newArray = [dragItem.item];
    } else if (dragItem.i > i) {
      newArray = [
        ...this.items.slice(0, i),
        dragItem.item,
        ...this.items.slice(i, dragItem.i),
        ...this.items.slice(dragItem.i + 1),
      ];
    } else {
      // this.draggedItem.i < i
      newArray = [
        ...this.items.slice(0, dragItem.i),
        ...this.items.slice(dragItem.i + 1, i + 1),
        dragItem.item,
        ...this.items.slice(i + 1),
      ];
    }
    this.items = newArray;
    dragItem.i = i;
    this.activeItem = i;
    this.updatePlaceholderState();
  }

  cancelEvent(event: DragEvent): void {
    if (!this.transfer.getItem() || !event) {
      return;
    }
    event.preventDefault();
  }

  onDrop(item: DraggableItem): void {
    if (
      item &&
      item.overZoneIndex !== this.currentZoneIndex &&
      item.lastZoneIndex === this.currentZoneIndex
    ) {
      this.items = this.items.filter(
        (x: SortableItem, i: number) => i !== item.i
      );
      this.updatePlaceholderState();
    }
    this.resetActiveItem(undefined);
  }

  onBoxDragover(event: DragEvent) {
    if (!this.items) {
      this.onItemDragover(event, 0);
    } else {
      this.cancelEvent(event);
    }
  }

  resetActiveItem(event: DragEvent): void {
    this.cancelEvent(event);
    this.activeItem = -1;
  }

  registerOnChange(callback: () => void): void {
    this.onChanged = callback;
  }

  registerOnTouched(callback: () => void): void {
    this.onTouched = callback;
  }

  /* tslint:disable-next-line: no-any */
  writeValue(value: any[]): void {
    if (value) {
      /* tslint:disable-next-line: no-any */
      this.items = value.map((x: any, i: number) => ({
        id: i,
        initData: x,
        value: this.fieldName ? x[this.fieldName] : x,
      }));
    } else {
      this.items = [];
    }
    this.updatePlaceholderState();
  }

  updatePlaceholderState(): void {
    this.showPlaceholder = !this._items.length;
  }
  private initDragstartEvent(event: DragEvent): void {
    // it is necessary for mozilla
    // data type should be 'Text' instead of 'text/plain' to keep compatibility
    // with IE
    event.dataTransfer.setData('Text', 'placeholder');
  }
}

export declare interface SortableItem {
  id: number;
  value: string;
  /* tslint:disable-next-line: no-any */
  initData: any;
}
