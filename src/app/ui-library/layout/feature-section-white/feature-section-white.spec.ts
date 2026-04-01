import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureSectionWhite } from './feature-section-white';

describe('FeatureSectionWhite', () => {
  let component: FeatureSectionWhite;
  let fixture: ComponentFixture<FeatureSectionWhite>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureSectionWhite]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureSectionWhite);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
