// outer
import { Action, createReducer, on } from '@ngrx/store';
// inner
import * as layoutActions from './layout.actions';
import { initialStateLayout, LayoutState } from './layout.state';
// end

const reducer = createReducer(
  initialStateLayout,
  // change navigation
  on(layoutActions.changeNavigation, (state, action) => {
    return {
      ...state,
      navigation: {
        ...state.navigation,
        ...action.payload.navigation
      }
    };
  }),
  on(layoutActions.changeNavigationNavBar, (state, action) => {
    return {
      ...state,
      navigation: {
        ...state.navigation,
        navbar: {
          ...state.navigation.navbar,
          ...action.payload.navbar
        }
      }
    };
  }),
  on(layoutActions.changeToolbar, (state, action) => {
    return {
      ...state,
      toolbar: {
        ...state.toolbar,
        ...action.payload.toolbar
      }
    };
  }),
  //
  on(layoutActions.changeFooter, (state, action) => {
    return {
      ...state,
      footer: {
        ...state.footer,
        ...action.payload.footer
      }
    };
  }),
);

// wrap our const reducer for AOT support.
export function layoutReducer(
  state: LayoutState | undefined,
  action: Action
): LayoutState {
  return reducer(state, action);
}
