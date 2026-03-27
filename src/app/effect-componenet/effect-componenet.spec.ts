import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectComponenet } from './effect-componenet';

describe('EffectComponenet', () => {
  let component: EffectComponenet;
  let fixture: ComponentFixture<EffectComponenet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EffectComponenet],
    }).compileComponents();

    fixture = TestBed.createComponent(EffectComponenet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
