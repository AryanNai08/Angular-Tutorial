import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleOperaterComponenet } from './style-operater-componenet';

describe('StyleOperaterComponenet', () => {
  let component: StyleOperaterComponenet;
  let fixture: ComponentFixture<StyleOperaterComponenet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StyleOperaterComponenet],
    }).compileComponents();

    fixture = TestBed.createComponent(StyleOperaterComponenet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
