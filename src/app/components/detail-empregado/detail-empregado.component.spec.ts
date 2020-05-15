import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEmpregadoComponent } from './detail-empregado.component';

describe('DetailEmpregadoComponent', () => {
  let component: DetailEmpregadoComponent;
  let fixture: ComponentFixture<DetailEmpregadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailEmpregadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailEmpregadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
