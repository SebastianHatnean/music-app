import { Action } from '@ngrx/store';

export enum AppErrorActionType {
  SET_APP_ERROR = 'SET_APP_ERROR',
  DELETE_APP_ERROR = 'DELETE_APP_ERROR',
}

export class SetAppError implements Action {
  readonly type = AppErrorActionType.SET_APP_ERROR;
  constructor(public payload: string) { }
}

export class DeleteAppError implements Action {
  readonly type = AppErrorActionType.DELETE_APP_ERROR;
  constructor() { }
}

export type AppErrorActions = SetAppError| DeleteAppError;
