// outer
import {
  ChangeDetectionStrategy,
  ViewEncapsulation,
  //
  Component,
} from '@angular/core';
// ngrx
import { Store } from '@ngrx/store';
// rxjs
import { Observable } from 'rxjs';
// inner
import { CommonSidebarService } from '@common';
//
import {
  RootStoreState,
  layoutSelectors,
} from 'app/core/root-store';
// end

@Component({
  selector: 'anms-layout-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent {
  navbar$: Observable<any> = this._store.select(
    layoutSelectors.getLayoutNavigationNavbar
  );

  /**
   * Constructor
   *
   * @param _store
   * @param _sidebarService
   */
  constructor(
    private _store: Store<RootStoreState>,
    private _sidebarService: CommonSidebarService,
  ) {}

  /**
   * Toggle sidebar open
   *
   * @param key
   */
  toggleSidebarOpen(key): void {
    this._sidebarService.getSidebar(key).toggleOpen();
  }
}
