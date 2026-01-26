import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolPermissionSite } from './rol-permission-site';

describe('RolPermissionSite', () => {
  let component: RolPermissionSite;
  let fixture: ComponentFixture<RolPermissionSite>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RolPermissionSite]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolPermissionSite);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
