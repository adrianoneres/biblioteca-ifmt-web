import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroListarComponent } from './livro-listar.component';

describe('LivroListarComponent', () => {
  let component: LivroListarComponent;
  let fixture: ComponentFixture<LivroListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LivroListarComponent]
    });
    fixture = TestBed.createComponent(LivroListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
