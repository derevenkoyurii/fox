import {
  Directive,
  Input,
  OnInit,
  HostListener,
  OnDestroy,
  HostBinding
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MediaObserver } from '@angular/flex-layout';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CommonMatchMediaService } from '@common/services/match-media/match-media.service';
import { CommonMatSidenavHelperService } from '@common/directives/mat-sidenav/mat-sidenav.service';

@Directive({
  selector: '[commonMatSidenavHelper]'
})
export class CommonMatSidenavHelperDirective implements OnInit, OnDestroy {
  @HostBinding('class.mat-is-locked-open')
  isLockedOpen: boolean;

  @Input()
  commonMatSidenavHelper: string;

  @Input()
  matIsLockedOpen: string;

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {CommonMatchMediaService} _commonMatchMediaService
   * @param {CommonMatSidenavHelperService} _commonMatSidenavHelperService
   * @param {MatSidenav} _matSidenav
   * @param {MediaObserver} _mediaObserver
   */
  constructor(
    private _commonMatchMediaService: CommonMatchMediaService,
    private _commonMatSidenavHelperService: CommonMatSidenavHelperService,
    private _matSidenav: MatSidenav,
    private _mediaObserver: MediaObserver
  ) {
    // Set the defaults
    this.isLockedOpen = true;

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
    // Register the sidenav to the service
    this._commonMatSidenavHelperService.setSidenav(
      this.commonMatSidenavHelper,
      this._matSidenav
    );

    if (
      this.matIsLockedOpen &&
      this._mediaObserver.isActive(this.matIsLockedOpen)
    ) {
      this.isLockedOpen = true;
      this._matSidenav.mode = 'side';
      this._matSidenav.toggle(true);
    } else {
      this.isLockedOpen = false;
      this._matSidenav.mode = 'over';
      this._matSidenav.toggle(false);
    }

    this._commonMatchMediaService.onMediaChange
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(() => {
        if (
          this.matIsLockedOpen &&
          this._mediaObserver.isActive(this.matIsLockedOpen)
        ) {
          this.isLockedOpen = true;
          this._matSidenav.mode = 'side';
          this._matSidenav.toggle(true);
        } else {
          this.isLockedOpen = false;
          this._matSidenav.mode = 'over';
          this._matSidenav.toggle(false);
        }
      });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}

@Directive({
  selector: '[commonMatSidenavToggler]'
})
export class CommonMatSidenavTogglerDirective {
  @Input()
  commonMatSidenavToggler: string;

  /**
   * Constructor
   *
   * @param {CommonMatSidenavHelperService} _commonMatSidenavHelperService
   */
  constructor(
    private _commonMatSidenavHelperService: CommonMatSidenavHelperService
  ) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * On click
   */
  @HostListener('click')
  onClick(): void {
    this._commonMatSidenavHelperService
      .getSidenav(this.commonMatSidenavToggler)
      .toggle();
  }
}
