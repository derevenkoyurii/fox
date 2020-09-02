import {
  Directive,
  ElementRef,
  EventEmitter,
  Output,
  Input,
  OnDestroy
} from '@angular/core';
import ResizeObserver from 'resize-observer-polyfill';
import { debounce } from 'lodash';

const entriesMap = new WeakMap();

const ro = new ResizeObserver((entries) => {
  for (const entry of entries) {
    if (entriesMap.has(entry.target)) {
      const comp = entriesMap.get(entry.target);

      comp._resizeCallback(entry);
    }
  }
});

@Directive({ selector: '[resizeObserver]' })
export class ResizeObserverDirective implements OnDestroy {
  @Output() changeSize = new EventEmitter();

  @Input()
  get debounceTime(): number {
    return this._debounce;
  }

  set debounceTime(val) {
    if (this._debounce !== val) {
      this._debounce = val;
      this._resizeCallback = debounce(
        (entry) => this.changeSize.emit(entry),
        this._debounce,
        {
          leading: true,
          trailing: false
        }
      );
    }
  }

  _debounce = 0;

  constructor(private el: ElementRef) {
    const target = this.el.nativeElement;
    entriesMap.set(target, this);
    ro.observe(target);
  }

  _resizeCallback(entry): void {
    this.changeSize.emit(entry);
  }

  ngOnDestroy(): void {
    const target = this.el.nativeElement;
    ro.unobserve(target);
    entriesMap.delete(target);
  }
}
