import {ViewEncapsulation, Component} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {layoutSelectors, RootStoreState} from 'src/app/core/root-store';

@Component({
  selector: 'app-vertical-layout-1',
  templateUrl: './layout-1.component.html',
  styleUrls: ['./layout-1.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VerticalLayout1Component {
  toolbar$: Observable<any> = this._store.select(layoutSelectors.getLayoutToolbar);
  footer$: Observable<any> = this._store.select(layoutSelectors.getLayoutFooter);
  navigation$: Observable<any> = this._store.select(layoutSelectors.getLayoutNavigation);

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
