import { Action } from '@ngrx/store';

export enum AppPlaylistActionType {
  SET_FAVORITE_PLAYLISTS = 'SET_FAVORITE_PLAYLISTS'
}

export class SetFavoritePlaylists implements Action {
  readonly type = AppPlaylistActionType.SET_FAVORITE_PLAYLISTS;
  constructor(public payload: any) {}
}

export type AppPlaylistsActions = SetFavoritePlaylists;
