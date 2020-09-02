// outer
import {
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  EventEmitter,
  Directive,
  Input,
  Output
} from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
// end

@Directive({ selector: '[commonResizable]' })
export class CommonResizableDirective implements AfterViewInit, OnDestroy, AfterViewChecked {
  @Output() changedWidth: EventEmitter<any> = new EventEmitter();
  @Input() resizableMinWidth = 280;
  @Input() resizableWidth;

  dragging;
  resizeTriggerEl: any;

  /**
   * Constructor
   *
   * @param {MediaObserver} _mediaObserver
   * @param {ElementRef} el
   *
   */
  constructor(
    private _mediaObserver: MediaObserver,
    private el: ElementRef
  ) {
  }

  // ---------------------------------------------------------------------------
  // @ Lifecycle hooks
  // ---------------------------------------------------------------------------

  ngAfterViewChecked(): void {
    if (this.el.nativeElement.classList.contains('locked-open')) {
      this.newWidth(this.resizableWidth);
    }
  }

  /**
   *
   */
  ngAfterViewInit(): void {
    this.el.nativeElement.insertAdjacentHTML(
      'afterend',
      '<div class="anms-resize-trigger anms-resize-right"></div>'
    );

    this.resizeTriggerEl = document.getElementsByClassName(
      'anms-resize-trigger'
    )[0];

    //
    function preventGlobalMouseEvents(): void {
      document.body.style['pointer-events'] = 'none';
      document.body.style['user-select'] = 'none';
    }

    function restoreGlobalMouseEvents(): void {
      document.body.style['pointer-events'] = 'auto';
      document.body.style['user-select'] = 'text';
    }

    /**
     *  Mouse Move
     */
    const mouseMoveG = (evt) => {
      if (!this.dragging) {
        return;
      }

      evt.stopPropagation();
      this.resizeTriggerEl.classList.add('active');

      this.newWidth(evt.clientX - this.el.nativeElement.offsetLeft);
    };
    /**
     * Mouse Up
     */
    const mouseUpG = (evt) => {
      if (!this.dragging) {
        return;
      }

      this.dragging = false;
      restoreGlobalMouseEvents();

      evt.stopPropagation();
      this.resizeTriggerEl.classList.remove('active');
    };
    /**
     * Mouse Down
     */
    const mouseDown = (evt) => {
      this.dragging = true;
      preventGlobalMouseEvents();
      evt.stopPropagation();
    };

    this.resizeTriggerEl.addEventListener('mousedown', mouseDown, false);
    document.addEventListener('mousemove', mouseMoveG, true);
    document.addEventListener('mouseup', mouseUpG, true);
  }

  /**
   *
   */
  ngOnDestroy(): void {
    this.resizeTriggerEl.remove();
  }

  // ---------------------------------------------------------------------------
  // @ Private methods
  // ---------------------------------------------------------------------------

  /**
   * New width (set new width to this.element)
   */
  private newWidth(width): void {
    // check to resizableMinWidth
    let futureWidth = Math.max(this.resizableMinWidth, width);
    futureWidth = Math.min(window.innerWidth / 3, futureWidth);

    this.resizableWidth = futureWidth;

    this.el.nativeElement.style.width = `${this.resizableWidth}px`;
    this.el.nativeElement.style.minWidth = `${this.resizableWidth}px`;
    this.el.nativeElement.style.maxWidth = `${this.resizableWidth}px`;

    this.changedWidth.emit(this.resizableWidth);
  }
}
