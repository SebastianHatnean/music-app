import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { SetFavoritePlaylists } from '../../../common/state/actions/playlist.actions';
import { ApplicationState } from '../../../common/state/app.state';
import { getFavoritePlaylists } from '../../../common/state/reducers/playlist.reducers';

@Component({
  selector: 'app-my-playlists',
  templateUrl: './my-playlists.component.html',
  styleUrls: ['./my-playlists.component.css'],
})
export class MyPlaylistsComponent implements OnInit {
  playlists = [];
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private store: Store<ApplicationState>) {}

  ngOnInit(): void {
    this.store
      .pipe(select(getFavoritePlaylists))
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        this.playlists = response;
      });
  }

  removeFavoritePlaylist(playlist) {
    this.playlists = this.playlists.filter(item => item.id !== playlist.id);
    this.store.dispatch(new SetFavoritePlaylists(this.playlists));
  }

  ngOnDestroy() {
    this.destroy$.unsubscribe();
  }
}
