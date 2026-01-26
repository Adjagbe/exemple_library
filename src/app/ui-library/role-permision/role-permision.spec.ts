import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolePermision } from './role-permision';

describe('RolePermision', () => {
  let component: RolePermision;
  let fixture: ComponentFixture<RolePermision>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RolePermision]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolePermision);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
