// outer
import { Injectable } from '@angular/core';
// ngrx
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
// rxjs
import { tap, withLatestFrom } from 'rxjs/operators';
// inner
import * as navigationActions from './navigation.actions';
import * as navigationSelectors from './navigation.selectors';
import { NavigationState } from 'src/app/core';
// end

// state key in Local Storage
export const NAVIGATION_KEY = 'NAVIGATION';

@Injectable()
export class NavigationEffects {
  /**
   * Constructor
   *
   * @param  _store$
   * @param  _actions$
   */
  constructor(
    private _store$: Store<NavigationState>,
    private _actions$: Actions
  ) {}

  /**
   * @name toLocalStorage$
   */
  toLocalStorage$ = createEffect(
    () => {
      return this._actions$.pipe(
        ofType(
          navigationActions.changePages,
          navigationActions.updateNavbarItem
        ),
        withLatestFrom(
          this._store$.select(navigationSelectors.getNavigationState)
        ),
        tap(([, state]) => {})
      );
    },
    { dispatch: false }
  );
}
