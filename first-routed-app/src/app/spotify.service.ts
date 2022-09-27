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

  getTrack(id: string | null) {
    const url = `https://api.spotify.com/v1/tracks/${id}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQDp56ht-67GRNM_69ghv-CHeiK5_cCK_ZbOUrp_NUxzPtzELm1RgwON_-e_PEleGnbg2jEHDXuMbBXjCa4lh3E8Ha7-joKk78WayrV8oHTkjJWIEUjvO_y2MeCFV9dctpp_d-aAst-dttC9D_gMctNSeOq2KsTWINcZaUgxhN2c8BXd9GaXm1r1mBlEmNE'
    });
    
    return this.http.get(url, { headers });
  }
  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQDp56ht-67GRNM_69ghv-CHeiK5_cCK_ZbOUrp_NUxzPtzELm1RgwON_-e_PEleGnbg2jEHDXuMbBXjCa4lh3E8Ha7-joKk78WayrV8oHTkjJWIEUjvO_y2MeCFV9dctpp_d-aAst-dttC9D_gMctNSeOq2KsTWINcZaUgxhN2c8BXd9GaXm1r1mBlEmNE-pej93h_1dOX0lCOMgoqejZWYysrkz7-inFSOyVTbWRAgghtFvcbXLBY76QQZLlr2NbFFI5H98'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}
