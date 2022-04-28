import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppPlaylistActionType, AppPlaylistsActions } from '../actions/playlist.actions';
import { ApplicationState } from '../app.state';

export interface AppFavoritePlaylists {
  favorite_playlists: any;
}

export const initialState = {
  favorite_playlists: [],
};

export const getApplicationFeature =
  createFeatureSelector<ApplicationState>('appData');

export const getFavoritePlaylists = createSelector(
  getApplicationFeature,
  (state) => state.playlists.favorite_playlists
);

export function appPlaylistsReducers(
  state: AppFavoritePlaylists = initialState,
  action: AppPlaylistsActions
) {
  switch (action.type) {
    case AppPlaylistActionType.SET_FAVORITE_PLAYLISTS:
      return {
        ...state,
        favorite_playlists: action.payload,
      };

    default:
      return state;
  }
}
