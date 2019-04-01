import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class SpotifyService {

	constructor(private http: HttpClient) { 
		console.log('servicio listo para usar');
	}

	getQuery(query : string){

		const url = `https://api.spotify.com/v1/${ query }`;

		const headers = new HttpHeaders({
			'Authorization': 'Bearer QBslIKHbW-esQb81JWmJyORzYFp-2o5EoNeAxlm3cF-KM9VoRP2WdQjSw6CRysQfrTnTuOwgwndpY2x5HU'
		});

		return this.http.get(url, { headers });
	}

	getNewReleases(){

		return this.getQuery('browse/new-releases?limit=21')
		.pipe( map( data =>  data['albums'].items));
	}

	getArtistas(termino : string){

		return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
		.pipe( map( data =>  data['artists'].items));
	}


	getArtista(id : string){

		return this.getQuery(`artists/${ id }`)
	}

	getTopTracks(id : string){

		return this.getQuery(`artists/${ id }/top-tracks?country=US`)
		.pipe( map( data =>  data['tracks']));
	}
}
