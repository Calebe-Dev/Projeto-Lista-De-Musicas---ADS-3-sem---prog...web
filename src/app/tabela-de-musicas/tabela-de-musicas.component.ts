import { Component } from '@angular/core';
import { musica } from '../musicas';
import { MusicService } from '../music.service';
@Component({
  selector: 'app-tabela-de-musicas',
  templateUrl: './tabela-de-musicas.component.html',
  styleUrl: './tabela-de-musicas.component.css'
})
export class TabelaDeMusicasComponent {

  musicas: musica[] =[];
  constructor(private service: MusicService){}

  ngOnInit(){
    this.loadMusicas()
  }

  loadMusicas(){
    this.service.getMusics().subscribe({
      next: data => this.musicas = data
    })
  }


}
