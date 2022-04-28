import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class PlaylistService {
  constructor(private http: HttpClient) {}

  getPlaylists() {
    const url =
      'https://portal.organicfruitapps.com/programming-guides/v2/us_en-us/featured-playlists.json';
    return this.http.get(url).pipe(
      map((response: any) => {
        console.log('RESPONSE', response);
        return response;
      })
    );
  }
}
