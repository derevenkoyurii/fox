// outer
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as _ from 'lodash';
// inner
import { LayoutState } from 'app/core';
// end

/**
 * Get layout state
 */
export const getLayoutState = createFeatureSelector<any>('layout');

/**
 * Get layout style
 */
export const getLayoutStyle = createSelector(
  getLayoutState,
  (state: LayoutState) => state.style
);

/**
 * Get layout toolbar
 */
export const getLayoutToolbar = createSelector(
  getLayoutState,
  (state: LayoutState) => state.toolbar
);

/**
 * Get layout navigation
 */
export const getLayoutNavigation = createSelector(
  getLayoutState,
  (state: LayoutState) => state.navigation
);

/**
 * Get layout footer
 */
export const getLayoutFooter = createSelector(
  getLayoutState,
  (state: LayoutState) => state.footer
);

/**
 * Get layout navbar
 */
export const getLayoutNavigationNavbar = createSelector(
  getLayoutState,
  (state: LayoutState) => state.navigation.navbar
);

/**
 * Get layout navigation isFolded
 */
export const getNavigationIsFolded = createSelector(
  getLayoutState,
  (state: LayoutState) => state.navigation.navbar.folded
);

/**
 * Get layout navigation colors
 */
export const getNavigationColors = createSelector(
  getLayoutState,
  (state: LayoutState) =>
    _.pick(state.navigation, [
      'customBackgroundColor',
      'headerBackground',
      'treeBackground',
      'barBackground'
    ])
);
