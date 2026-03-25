import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Countercomponent } from './countercomponent';

describe('Countercomponent', () => {
  let component: Countercomponent;
  let fixture: ComponentFixture<Countercomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Countercomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Countercomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
