// outer
import {ViewEncapsulation, Component} from '@angular/core';
// rxjs
import {Observable} from 'rxjs';
// ngrx
import {Store} from '@ngrx/store';
// inner
import {layoutSelectors, RootStoreState} from 'app/core/root-store';
// end

@Component({
  selector: 'anms-vertical-layout-1',
  templateUrl: './layout-1.component.html',
  styleUrls: ['./layout-1.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VerticalLayout1Component {
  toolbar$: Observable<any> = this._store.select(layoutSelectors.getLayoutToolbar);
  footer$: Observable<any> = this._store.select(layoutSelectors.getLayoutFooter);
  navigation$: Observable<any> = this._store.select(layoutSelectors.getLayoutNavigation);
  navbar$: Observable<any> = this._store.select(layoutSelectors.getLayoutNavigationNavbar);

  /**
   * Constructor
   *
   * @param _store
   */
  constructor(
    private _store: Store<RootStoreState>,
  ) {
  }
}
