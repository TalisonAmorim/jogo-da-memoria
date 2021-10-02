import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReiniciarComponent } from './reiniciar.component';

describe('ReiniciarComponent', () => {
  let component: ReiniciarComponent;
  let fixture: ComponentFixture<ReiniciarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReiniciarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReiniciarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
