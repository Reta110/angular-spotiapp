import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
	selector: 'app-artist',
	templateUrl: './artist.component.html'
})
export class ArtistComponent{

	artista : any = {};
	topTracks : any = {};
	loading : boolean;

	constructor(private router:ActivatedRoute, 
		private spotify : SpotifyService) { 

		this.router.params.subscribe( params => {
			this.getArtista( params['id'] );
			this.getTopTracks( params['id'] );
		});

	}

	getArtista(id :string){
		this.loading = true;
		this.spotify.getArtista(id)
		.subscribe( artista => {
			this.artista = artista;
			this.loading= false;
		});
	}

	getTopTracks(id: string){
		this.spotify.getTopTracks(id)
		.subscribe( topTracks => {
			this.topTracks = topTracks;
			console.log(topTracks);
		});
	}

}
