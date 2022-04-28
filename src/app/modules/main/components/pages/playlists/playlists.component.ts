import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { PlaylistService } from '../../../common/services/playlist.service';
import { SetFavoritePlaylists } from '../../../common/state/actions/playlist.actions';
import { ApplicationState } from '../../../common/state/app.state';
import { select, Store } from '@ngrx/store';
import { getFavoritePlaylists } from '../../../common/state/reducers/playlist.reducers';
import swal from 'sweetalert2';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css'],
})
export class PlaylistsComponent implements OnInit {
  featuredPlaylists = [];
  favoritePlaylists: any;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private playlistService: PlaylistService,
    private route: Router,
    private store: Store<ApplicationState>
  ) {}

  ngOnInit(): void {
    this.getPlaylists();
    this.store
    .pipe(select(getFavoritePlaylists))
    .pipe(takeUntil(this.destroy$))
    .subscribe((response) => {
      this.favoritePlaylists = response;
    });
  }

  getPlaylists() {
    this.playlistService.getPlaylists().subscribe((response) => {
      this.featuredPlaylists = response.featuredPlaylists?.content;
    });
  }

  navigateToPlaylist(playlist) {
    this.route.navigateByUrl(playlist);
  }

  addToFavorites(playlist) {
    const index = this.favoritePlaylists.findIndex(item => item.id === playlist.id);
    //  Do not add to list if item is present in it
    if (index === -1) {
      this.favoritePlaylists = [...this.favoritePlaylists, playlist];
      this.store.dispatch(new SetFavoritePlaylists(this.favoritePlaylists));
    } else {
      swal.fire({
        title: 'Info',
        text: "This playlist has already been added to your favorite list!",
        icon: 'info',
        showCancelButton: false,
        confirmButtonText: 'Ok!'
      })
    }
 
  }
}
