import { createAction, props } from '@ngrx/store';

// Action updateNavbarItem
export const updateNavbarItem = createAction(
  '[Navigation] Update NavBar Item',
  props<{
    payload: {
      id: string;
      data: any;
    };
  }>()
);

// Action changePages
export const changePages = createAction(
  '[Navigation] Change Pages',
  props<{
    payload: {
      privileges: any[];
    };
  }>()
);
