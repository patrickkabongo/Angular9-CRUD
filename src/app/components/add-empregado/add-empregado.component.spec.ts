import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmpregadoComponent } from './add-empregado.component';

describe('AddEmpregadoComponent', () => {
  let component: AddEmpregadoComponent;
  let fixture: ComponentFixture<AddEmpregadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEmpregadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmpregadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
