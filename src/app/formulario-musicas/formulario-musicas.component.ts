import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MusicService } from '../music.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-musicas',
  templateUrl: './formulario-musicas.component.html',
  styleUrl: './formulario-musicas.component.css'
})
export class FormularioMusicasComponent implements OnInit {

  formGrupMusic: FormGroup;

  constructor(private router: Router,
              private activatedRouter: ActivatedRoute,
              private service: MusicService,
              private FormBuilder: FormBuilder,           
            ){  this.formGrupMusic = FormBuilder.group({
              id:[''],
              name:[''],
              artist:[''],
              price:[''],
              category:[''],
              year:['']
            })}

  ngOnInit(): void {
      const id = Number(this.activatedRouter.snapshot.paramMap.get("id"))
      this.loadMusias(id);
    }

  loadMusias(id: number){
    this.service.getMusicasById(id).subscribe({
      next:data => this.formGrupMusic.setValue(data)
    });
  };

  update(){
    this.service.update(this.formGrupMusic.value).subscribe({
      next: () => this.router.navigate(['musicas'])
    })
  }

  



}
