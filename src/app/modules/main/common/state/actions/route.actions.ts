import { Action } from '@ngrx/store';

export enum AppRoutesActionType {
  SET_CURRENT_ROUTE = 'SET_CURRENT_ROUTE',
  GET_PREVIOUS_ROUTE = 'GET_PREVIOUS_ROUTE',
}

export class SetAppCurrentRoute implements Action {
  readonly type = AppRoutesActionType.SET_CURRENT_ROUTE;
  constructor(public payload: string) {}
}

export class GetAppPreviousRoute implements Action {
  readonly type = AppRoutesActionType.GET_PREVIOUS_ROUTE;
  constructor(public payload: string) {}
}

export type AppRouteActions = SetAppCurrentRoute | GetAppPreviousRoute;
