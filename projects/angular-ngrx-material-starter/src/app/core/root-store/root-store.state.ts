// outer
import * as fromRouter from '@ngrx/router-store';
// inner
import { NavigationState, LayoutState } from 'app/core';
// end

export interface RootStoreState {
  layout: LayoutState;
  navigation: NavigationState;
  router: fromRouter.RouterReducerState<any>;
}
