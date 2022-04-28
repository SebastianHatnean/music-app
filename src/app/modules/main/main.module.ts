import { NgModule } from '@angular/core';
import {
  HttpClientModule,
  HttpClientJsonpModule,
} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AppRoutingModule } from './app-routing.module';
import { storeLogger } from 'ngrx-store-logger';
import { ActionReducer, StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { appRouteReducers } from './common/state/reducers/route.reducers';
import { appPlaylistsReducers } from './common/state/reducers/playlist.reducers';
import { errorReducers } from './common/state/reducers/error.reducers';
import { ContainerComponent } from './components/container/container.component';
import { PlaylistsComponent } from './components/pages/playlists/playlists.component';
import { TooltipModule } from 'ng2-tooltip-directive';
import { MyPlaylistsComponent } from './components/pages/my-playlists/my-playlists.component';

export function logger(reducer: ActionReducer<any>): any {
  return storeLogger()(reducer);
}
export const metaReducers = environment.production ? [] : [logger];

@NgModule({
  declarations: [DashboardComponent, ContainerComponent, PlaylistsComponent, MyPlaylistsComponent],
  entryComponents: [],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    HttpClientModule,
    TooltipModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(
      'appData',
      {
        route: appRouteReducers,
        playlists: appPlaylistsReducers,
        error: errorReducers,
      },
      { metaReducers }
    ),
    SweetAlert2Module.forRoot(),
  ],
  exports: [ContainerComponent],
  providers: [],
})
export class MainModule {}
