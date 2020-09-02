// outer imports
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
// rxjs
import { Subject } from 'rxjs';
// imports end

@Component({
  selector: 'anms-common-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarComponent implements OnInit, OnDestroy {
  collapsed: boolean;

  @ViewChild('searchInput', { static: true })
  searchInputField;

  @Output()
  search: EventEmitter<any> = new EventEmitter();

  @Input()
  value: string;

  @Input()
  placeholder: string;

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   */
  constructor() {
    // Set the defaults
    this.collapsed = true;

    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  // ---------------------------------------------------------------------------
  // @ Lifecycle hooks
  // ---------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Subscribe to config changes
    if (this.value && this.collapsed) {
      this.expand();
    }
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  // ---------------------------------------------------------------------------
  // @ Public methods
  // ---------------------------------------------------------------------------

  /**
   * Collapse
   */
  collapse(): void {
    this.searchInputField.nativeElement.value = null;
    this.search.emit(null);
    this.collapsed = true;
  }

  /**
   * Expand
   */
  expand(): void {
    this.collapsed = false;

    setTimeout(() => {
      this.searchInputField.nativeElement.focus();
    });
  }

  /**
   * Search
   *
   * @param $event
   */
  onChangeInput($event): void {
    this.search.emit($event.target.value);
  }
}
