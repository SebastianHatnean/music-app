import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../../common/services/playlist.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {
  isNotUserFirstTime = false;
  featuredPlaylists = [];

  constructor(private playlistService: PlaylistService, private route: Router) {}

  ngOnInit(): void {
    this.isNotUserFirstTime = JSON.parse(localStorage.getItem('isNotUserFirstTime'));
    console.log(this.isNotUserFirstTime);
    if (!this.isNotUserFirstTime) {
      setTimeout(() => {
        swal.fire({
          title: 'This is not looking so good, right?',
          text: "Yeah, please check the real website",
          icon: 'info',
          showCancelButton: true,
          confirmButtonText: 'Yes, I am so ready for that!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.isNotUserFirstTime = true;
            localStorage.setItem('isNotUserFirstTime', 'true');
            this.route.navigate(['dashboard/playlists'])
          }
        });
      }, 6000);
    }
    this.getPlaylists();

  }

  getPlaylists() {
    this.playlistService.getPlaylists().subscribe((response) => {
      this.featuredPlaylists = response.featuredPlaylists?.content;
    });
  }
}
