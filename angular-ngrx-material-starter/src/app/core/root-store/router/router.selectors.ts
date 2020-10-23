// outer imports
import { createFeatureSelector } from '@ngrx/store';
import {
  RouterReducerState,
  getSelectors,
  DEFAULT_ROUTER_FEATURENAME
} from '@ngrx/router-store';
// inner imports
// imports end

export const selectRouter = createFeatureSelector<any, RouterReducerState<any>>(
  DEFAULT_ROUTER_FEATURENAME
);

export const {
  selectCurrentRoute,
  // select the current route query params
  selectQueryParams,
  // factory function to select a query param
  selectQueryParam,
  // select the current route params
  selectRouteParams,
  // factory function to select a route param
  selectRouteParam,
  // select the current route data
  selectRouteData,
  // select the current url
  selectUrl
} = getSelectors(selectRouter);
