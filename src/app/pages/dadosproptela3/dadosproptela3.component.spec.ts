import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dadosproptela3Component } from './dadosproptela3.component';

describe('Dadosproptela3Component', () => {
  let component: Dadosproptela3Component;
  let fixture: ComponentFixture<Dadosproptela3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dadosproptela3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dadosproptela3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
