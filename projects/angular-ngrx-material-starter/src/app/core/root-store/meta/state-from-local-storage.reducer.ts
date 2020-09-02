// outer
import { ActionReducer, INIT, UPDATE } from '@ngrx/store';
// inner
import { LocalStorageService } from '@common';
import { RootStoreState } from 'app/core';
//  end

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
