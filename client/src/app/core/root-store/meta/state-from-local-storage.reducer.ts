import { ActionReducer, INIT, UPDATE } from '@ngrx/store';

import { LocalStorageService } from 'src/common';
import { RootStoreState } from 'src/app/core';

/**
 * @name initStateFromLocalStorage
 * @param reducer
 * @return
 */
export function initStateFromLocalStorage(
  reducer: ActionReducer<RootStoreState>
): ActionReducer<RootStoreState> {
  return function (state, action) {
    const newState = reducer(state, action);

    if ([INIT.toString(), UPDATE.toString()].includes(action.type)) {
      return {
        ...newState,
        ...LocalStorageService.initStateFrom({ ...newState })
      };
    }

    return newState;
  };
}
