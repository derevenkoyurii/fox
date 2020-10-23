import { createReducer, on, Action } from '@ngrx/store';
import * as navigationActions from './navigation.actions';
import { initialStateNavigation, NavigationState } from './navigation.state';

const reducer = createReducer(
  initialStateNavigation,
  // updateNavbarItem
  on(navigationActions.updateNavbarItem, (state: NavigationState, action) => {
    const { data, id } = action.payload;

    const futurePages = state.ui.pages.map((page) => {
      if (page.id === id) {
        return { ...page, ...data };
      }

      return page;
    });

    return {
      ...state,
      ui: {
        ...state.ui,
        pages: futurePages
      }
    };
  }),
  // changePages
  on(navigationActions.changePages, (state: NavigationState, action) => {
    return {
      ...state,
      ui: {
        ...state.ui,
        pages: []
      }
    };
  })
);

// wrap our const reducer for AOT support.
export function navigationReducer(
  state: NavigationState | undefined,
  action: Action
): NavigationState {
  return reducer(state, action);
}
