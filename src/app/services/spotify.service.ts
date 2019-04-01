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

	getNewReleases(){

		const headers = new HttpHeaders({
			'Authorization': 'Bearer BQCW2PJNw1MSrbU3GS9Y6C2cmth-iJSf2tNtAgTpeNWHAVTDM0uMLUkO0COHVK5fHS_1H6qEkM8wRUJCQv8'
		});

		return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=21', { headers })
		.pipe( map( data =>  data['albums'].items));

		/*.pipe( map( data => {
			return data['albums'].items;
		}));
		*/
	}

	getArtista(termino : string){

		const headers = new HttpHeaders({
			'Authorization': 'Bearer BQCW2PJNw1MSrbU3GS9Y6C2cmth-iJSf2tNtAgTpeNWHAVTDM0uMLUkO0COHVK5fHS_1H6qEkM8wRUJCQv8'
		});

		return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers })
		.pipe( map( data => data['artists'].items));
	}
}
