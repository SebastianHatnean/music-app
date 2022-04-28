import { AppError } from "./reducers/error.reducers";
import { AppRoute } from "./reducers/route.reducers";
import { AppFavoritePlaylists } from "./reducers/playlist.reducers";


export interface ApplicationState {
  route: AppRoute;
  playlists: AppFavoritePlaylists;
  error: AppError;
}
