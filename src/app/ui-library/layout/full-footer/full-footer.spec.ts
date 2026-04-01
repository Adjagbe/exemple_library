import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullFooter } from './full-footer';

describe('FullFooter', () => {
  let component: FullFooter;
  let fixture: ComponentFixture<FullFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullFooter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
