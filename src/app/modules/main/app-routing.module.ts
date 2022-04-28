import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyPlaylistsComponent } from './components/pages/my-playlists/my-playlists.component';
import { PlaylistsComponent } from './components/pages/playlists/playlists.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard/playlists', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'playlists', component: PlaylistsComponent },
      { path: 'my-playlists', component: MyPlaylistsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
