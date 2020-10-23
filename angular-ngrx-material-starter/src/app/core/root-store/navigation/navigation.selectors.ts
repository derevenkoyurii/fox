// outer
import { createFeatureSelector, createSelector } from '@ngrx/store';
// inner
import { NavigationState } from 'src/app/core';
// end

/**
 * Get navigation state
 */
export const getNavigationState = createFeatureSelector<any>('navigation');

/**
 * Get navBar pages
 */
export const getNavBarPages = createSelector(
  getNavigationState,
  (state: NavigationState) => state.ui.pages
);
