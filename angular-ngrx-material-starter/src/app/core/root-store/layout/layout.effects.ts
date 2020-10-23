// outer
import { Injectable } from '@angular/core';
// ngrx
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
// rxjs
import { tap, withLatestFrom } from 'rxjs/operators';
// inner
import { LayoutState } from 'src/app/core';
import * as layoutActions from './layout.actions';
import * as layoutSelectors from './layout.selectors';
// end

// state key in Local Storage
export const LAYOUT_KEY = 'LAYOUT';

@Injectable()
export class LayoutEffects {
  /**
   * Constructor
   *
   * @param  _store
   * @param  _actions$
   */
  constructor(private _store: Store<LayoutState>, private _actions$: Actions) {}

  /**
   * @name toLocalStorage$
   */
  toLocalStorage$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(
          layoutActions.changeNavigation,
          layoutActions.changeToolbar,
          layoutActions.changeFooter
        ),
        withLatestFrom(this._store.select(layoutSelectors.getLayoutState)),
        tap(([, state]) => {})
      ),
    { dispatch: false }
  );
}
