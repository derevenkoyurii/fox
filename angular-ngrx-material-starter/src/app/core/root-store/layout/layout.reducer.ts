import { Action, createReducer, on } from '@ngrx/store';

import * as layoutActions from './layout.actions';
import { initialStateLayout, LayoutState } from './layout.state';

const reducer = createReducer(
  initialStateLayout,
  on(layoutActions.changeNavigation, (state, action) => {
    return {
      ...state,
      navigation: {
        ...state.navigation,
        ...action.payload
      }
    };
  }),
  on(layoutActions.changeToolbar, (state, action) => {
    return {
      ...state,
      toolbar: {
        ...state.toolbar,
        ...action.payload
      }
    };
  }),
  //
  on(layoutActions.changeFooter, (state, action) => {
    return {
      ...state,
      footer: {
        ...state.footer,
        ...action.payload
      }
    };
  })
);

// wrap our const reducer for AOT support.
export function layoutReducer(
  state: LayoutState | undefined,
  action: Action
): LayoutState {
  return reducer(state, action);
}
