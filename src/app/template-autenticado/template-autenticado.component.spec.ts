import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateAutenticadoComponent } from './template-autenticado.component';

describe('TemplateAutenticadoComponent', () => {
  let component: TemplateAutenticadoComponent;
  let fixture: ComponentFixture<TemplateAutenticadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TemplateAutenticadoComponent]
    });
    fixture = TestBed.createComponent(TemplateAutenticadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
