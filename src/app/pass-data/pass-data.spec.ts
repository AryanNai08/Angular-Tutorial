import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassData } from './pass-data';

describe('PassData', () => {
  let component: PassData;
  let fixture: ComponentFixture<PassData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassData],
    }).compileComponents();

    fixture = TestBed.createComponent(PassData);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
