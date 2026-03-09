import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWhithEmoji } from './form-whith-emoji';

describe('FormWhithEmoji', () => {
  let component: FormWhithEmoji;
  let fixture: ComponentFixture<FormWhithEmoji>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormWhithEmoji]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormWhithEmoji);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
