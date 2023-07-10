import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dadosproptela4Component } from './dadosproptela4.component';

describe('Dadosproptela4Component', () => {
  let component: Dadosproptela4Component;
  let fixture: ComponentFixture<Dadosproptela4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dadosproptela4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dadosproptela4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
