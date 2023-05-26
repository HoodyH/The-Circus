import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spotify-playlist',
  templateUrl: './spotify-playlist.component.html',
  styleUrls: ['./spotify-playlist.component.css']
})
export class SpotifyPlaylistComponent implements OnInit {

  uri = 'https://open.spotify.com/embed/playlist/49HOvT49YYc1mkb03saRdi?si=bh8ot00VRDyzJOGH1LTSjA&nd=1'
  constructor() { }

  ngOnInit(): void {
  }

}
