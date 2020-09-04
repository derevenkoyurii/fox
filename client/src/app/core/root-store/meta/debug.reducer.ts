// outer
import { ActionReducer } from '@ngrx/store';
import { omit } from 'lodash';
// inner
import { RootStoreState } from 'src/app/core';
// end

/**
 * Debugger
 *
 * @param reducer
 * @return
 */
export function debug(
  reducer: ActionReducer<RootStoreState>
): ActionReducer<RootStoreState> {
  return (state, action) => {
    const newState = reducer(state, action);

    let payload = (action as any).payload;
    if (!payload) {
      payload = { ...omit(action, ['payload', 'type']) };
    }

    console.log(`[DEBUG] action: ${action.type}`, {
      payload,
      oldState: state,
      newState
    });

    return newState;
  };
}
