import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturePrincipale } from './feature-principale';

describe('FeaturePrincipale', () => {
  let component: FeaturePrincipale;
  let fixture: ComponentFixture<FeaturePrincipale>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturePrincipale]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturePrincipale);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
