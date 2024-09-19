import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioMusicasComponent } from './formulario-musicas.component';

describe('FormularioMusicasComponent', () => {
  let component: FormularioMusicasComponent;
  let fixture: ComponentFixture<FormularioMusicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioMusicasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioMusicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
