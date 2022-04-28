import { ApplicationState } from '../app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppErrorActions, AppErrorActionType } from '../actions/error.actions';

export interface AppError {
  error: string;
}

export const initialState = {
  error: '',
};

export const getApplicationFeature =
  createFeatureSelector<ApplicationState>('appData');

export const getAppError = createSelector(
  getApplicationFeature,
  (appState) => appState.error.error
);

export function errorReducers(state = initialState, action: AppErrorActions) {
  switch (action.type) {
    case AppErrorActionType.SET_APP_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case AppErrorActionType.DELETE_APP_ERROR:
      return {
        ...state,
        error: '',
      };

    default:
      return state;
  }
}
