import {
  ChangeDetectionStrategy,
  ViewEncapsulation,
  Component
} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { CommonSidebarService } from 'src/common';

import {
  RootStoreState,
  layoutSelectors,
  navigationSelectors
} from 'src/app/core/root-store';

@Component({
  selector: 'app-layout-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent {
  navBar$ = this._store.pipe(select(navigationSelectors.getNavBarPages));
  customBackgroundColor$: Observable<boolean> = this._store.pipe(
    select(layoutSelectors.getNavigationColors),
    map((data) => data.customBackgroundColor)
  );
  headerBackground$: Observable<string> = this._store.pipe(
    select(layoutSelectors.getNavigationColors),
    map((data) => data.headerBackground)
  );
  barBackground$: Observable<string> = this._store.pipe(
    select(layoutSelectors.getNavigationColors),
    map((data) => data.barBackground)
  );

  /**
   * Constructor
   *
   * @param _sidebarService
   * @param _router
   * @param _store
   *
   */
  constructor(
    private _sidebarService: CommonSidebarService,
    private _router: Router,
    private _store: Store<RootStoreState>
  ) {}

  /**
   * @name toggleSidebarOpened
   * @description
   */
  toggleSidebarOpened(): void {
    this._sidebarService.getSidebar('navbar').toggleOpen();
  }

  /**
   * @name toggleSidebarFolded
   * @description
   */
  toggleSidebarFolded(): void {
    this._sidebarService.getSidebar('navbar').toggleFold();
  }
}
