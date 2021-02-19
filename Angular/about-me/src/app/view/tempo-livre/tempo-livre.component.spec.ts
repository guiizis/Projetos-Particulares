import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempoLivreComponent } from './tempo-livre.component';

describe('TempoLivreComponent', () => {
  let component: TempoLivreComponent;
  let fixture: ComponentFixture<TempoLivreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempoLivreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempoLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
