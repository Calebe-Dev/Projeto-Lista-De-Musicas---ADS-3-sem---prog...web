import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaDeMusicasComponent } from './tabela-de-musicas.component';

describe('TabelaDeMusicasComponent', () => {
  let component: TabelaDeMusicasComponent;
  let fixture: ComponentFixture<TabelaDeMusicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabelaDeMusicasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaDeMusicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
