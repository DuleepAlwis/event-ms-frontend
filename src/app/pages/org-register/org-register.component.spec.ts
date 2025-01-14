import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgRegisterComponent } from './org-register.component';

describe('OrgRegisterComponent', () => {
  let component: OrgRegisterComponent;
  let fixture: ComponentFixture<OrgRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrgRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrgRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
