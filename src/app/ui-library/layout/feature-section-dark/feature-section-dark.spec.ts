import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureSectionDark } from './feature-section-dark';

describe('FeatureSectionDark', () => {
  let component: FeatureSectionDark;
  let fixture: ComponentFixture<FeatureSectionDark>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureSectionDark]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureSectionDark);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
