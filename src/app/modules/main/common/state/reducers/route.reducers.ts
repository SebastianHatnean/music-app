import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppRouteActions, AppRoutesActionType } from '../actions/route.actions';
import { ApplicationState } from '../app.state';

export interface AppRoute {
  currentRoute: string;
  previousRoute: string;
}

export const initialState = {
  currentRoute: '',
  previousRoute: '',
};

export const getApplicationFeature =
  createFeatureSelector<ApplicationState>('appData');

export const getCurrentRoute = createSelector(
  getApplicationFeature,
  (state) => state.route.currentRoute
);

export const getPreviousRoute = createSelector(
  getApplicationFeature,
  (state) => state.route.previousRoute
);

export function appRouteReducers(
  state: AppRoute = initialState,
  action: AppRouteActions
) {
  switch (action.type) {
    case AppRoutesActionType.GET_PREVIOUS_ROUTE:
      return {
        ...state,
        previousRoute: action.payload,
      };
    case AppRoutesActionType.SET_CURRENT_ROUTE:
      return {
        ...state,
        currentRoute: action.payload,
      };
    default:
      return state;
  }
}
