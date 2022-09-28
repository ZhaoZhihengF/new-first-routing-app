import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { SpotifyService } from '../spotify.service';
import { Observable } from 'rxjs';
import {Location} from '@angular/common'



@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  //Osserva gli eventi sulla route tracks, restituisce la ParamMap che contiene tutti i   
  //parametri passati all’url
  routeObs: Observable<ParamMap> | undefined; 

  track : any; //Qui salverò la traccia selezionata
  spotifyServiceObs: any;
  
  //Usiamo la dependency injection per farci mandare i moduli del routing e dello    
  //SpotifyService
  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private location: Location ,
    private service: SpotifyService ) { }


  ngOnInit(): void {
    //Ottengo l'observable che notifica le informazioni sulla route attiva
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }

 //Ogni volta che viene invocata la route tracks/:id, l'observable richiama questo metodo
 getRouterParam = (params: ParamMap) =>
 {
   let trackId = params.get('id'); //Ottengo l'id dai parametri
   console.log (trackId); //Stampo su console
   //spotifyServiceObs va dichiarato
   this.spotifyServiceObs = this.service.getTrack(trackId!) ;
   this.spotifyServiceObs.subscribe((data : any)=>this.track = data)
 }
 back() : void
 {
   this.location.back();
   
 }
}
