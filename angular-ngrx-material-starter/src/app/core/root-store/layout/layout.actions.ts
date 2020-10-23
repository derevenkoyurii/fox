import { createAction, props } from '@ngrx/store';
import { Footer, Toolbar, Navigation } from 'src/app/core/interfaces';

// Action type Change Navigation
export const changeNavigation = createAction(
  '[Layout] Change Navigation',
  props<{
    payload: Navigation;
  }>()
);

// Action type Change Toolbar
export const changeToolbar = createAction(
  '[Layout] Change Navigation Toolbar',
  props<{
    payload: Toolbar;
  }>()
);

// Action type Change Footer
export const changeFooter = createAction(
  '[Layout] Change Navigation Footer',
  props<{
    payload: Footer;
  }>()
);
