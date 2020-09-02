// outer
import { createAction, props } from '@ngrx/store';
// inner
import { Footer, Toolbar, Navbar } from 'app/core/interfaces';
// end

// Action type Change Navigation
export const changeNavigation = createAction(
  '[Layout] Change Navigation',
  props<{
    payload: {
      navigation: any;
    };
  }>()
);

// Action type Change Navigation NavBar
export const changeNavigationNavBar = createAction(
  '[Layout] Change Navigation NavBar',
  props<{
    payload: {
      navbar: Navbar;
    };
  }>()
);

// Action type Change Toolbar
export const changeToolbar = createAction(
  '[Layout] Change Navigation Toolbar',
  props<{
    payload: {
      toolbar: Toolbar;
    };
  }>()
);

// Action type Change Footer
export const changeFooter = createAction(
  '[Layout] Change Navigation Footer',
  props<{
    payload: {
      footer: Footer;
    };
  }>()
);
