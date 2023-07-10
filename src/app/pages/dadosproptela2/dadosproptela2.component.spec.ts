import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dadosproptela2Component } from './dadosproptela2.component';

describe('Dadosproptela2Component', () => {
  let component: Dadosproptela2Component;
  let fixture: ComponentFixture<Dadosproptela2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dadosproptela2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dadosproptela2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
