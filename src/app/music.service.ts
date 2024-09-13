import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { musica } from './musicas';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private http:HttpClient) {}
   
  getMusics():Observable<musica[]>{
    return this.http.get<musica[]>('http://localhost:3000/musics');
  }
}
