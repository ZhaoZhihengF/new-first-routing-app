import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'  
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQDMD88whjCzdSnn5OJ56AotWaG1Dqczb8m1A7iV74LEBCUlpL5hOuTKHaFFubWcAKhIw5lVM7p0HCsV9ZEQ_xDPtkPfpFtAFWzYjb7SB_UyH6KHkpiY_48PgezJMD_sH2yflxSOMr4eRupk88y7ZBuWDvaALJdT1vf8PJXirK_M6QmsHLG0aNcZvcd4a84'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}