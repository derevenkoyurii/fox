// outer imports
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  Input,
  OnDestroy,
  OnInit
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { merge, Observable, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
// inner imports
import { commonAnimations } from '@common/scss/animations';
import { layoutSelectors, RootStoreState } from 'app/core/root-store';
import { Store } from '@ngrx/store';

// imports end

@Component({
  selector: 'anms-vertical-collapsable',
  templateUrl: './collapsable.component.html',
  styleUrls: ['./collapsable.component.scss'],
  animations: commonAnimations,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavVerticalCollapsableComponent implements OnInit, OnDestroy {
  @Input() item: any;

  @HostBinding('class') classes = 'nav-collapsable nav-item';
  @HostBinding('class.open') public isOpen = false;

  isFolded$: Observable<any>;
  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param _changeDetectorRef
   * @param _router
   * @param _store
   *
   */
  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _router: Router,
    private _store: Store<RootStoreState>
  ) {
    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    this.isFolded$ = this._store.select(layoutSelectors.getNavigationIsFolded);

    // Listen for router.ts events
    this._router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this._unsubscribeAll)
      )
      .subscribe((event: NavigationEnd) => {
        // Check if the url can be found in
        // one of the children of this item
        if (this.isUrlInChildren(this.item, event.urlAfterRedirects)) {
          this.expand();
        } else {
          this.collapse();
        }
      });

    // Check if the url can be found in
    // one of the children of this item
    if (this.isUrlInChildren(this.item, this._router.url)) {
      this.expand();
    } else {
      this.collapse();
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

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Toggle collapse
   *
   * @param ev
   */
  toggleOpen(ev): void {
    ev.preventDefault();
    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      // this._router.navigate([this.item.children[0].url], {
      //   queryParamsHandling: 'merge'
      // });
    }
  }

  /**
   * Expand the collapsable navigationConfig
   */
  expand(): void {
    if (this.isOpen) {
      return;
    }

    this.isOpen = true;

    // Mark for check
    this._changeDetectorRef.markForCheck();
  }

  /**
   * Collapse the collapsable navigationConfig
   */
  collapse(): void {
    if (!this.isOpen) {
      return;
    }

    this.isOpen = false;

    // Mark for check
    this._changeDetectorRef.markForCheck();
  }

  /**
   * Check if the given url can be found
   * in one of the given parent's children
   *
   * @param parent
   * @param url
   * @returns {boolean}
   */
  isUrlInChildren(parent, url): boolean {
    if (!parent.children) {
      return false;
    }

    for (let i = 0; i < parent.children.length; i++) {
      if (parent.children[i].children) {
        if (this.isUrlInChildren(parent.children[i], url)) {
          return true;
        }
      }

      if (
        parent.children[i].url === url ||
        url.includes(parent.children[i].url)
      ) {
        return true;
      }
    }

    return false;
  }
}
