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
			'Authorization': 'Bearer BQDoI7D5vdEPOO2TVo6Xi93R-gntuX149aIPa3kKP3W7dvOo5U1ZtIdND3-OWU95eNlr-no709FLHcKVX_o'
		});

		return this.http.get(url, { headers });
	}

	getNewReleases(){

		return this.getQuery('browse/new-releases?limit=21')
		.pipe( map( data =>  data['albums'].items));
	}

	getArtista(termino : string){

		return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
		.pipe( map( data =>  data['artists'].items));
	}
}
