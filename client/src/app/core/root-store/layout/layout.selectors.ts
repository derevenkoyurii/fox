import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as _ from 'lodash';
import { LayoutState } from 'src/app/core';

/**
 * Get layout state
 */
export const getLayoutState = createFeatureSelector<any>('layout');

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
 * Get layout navigation isFolded
 */
export const getNavigationIsFolded = createSelector(
  getLayoutState,
  (state: LayoutState) => state.navigation.folded
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
      'barBackground'
    ])
);
