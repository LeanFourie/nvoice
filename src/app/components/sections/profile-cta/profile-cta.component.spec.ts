import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCtaComponent } from './profile-cta.component';

describe('ProfileCtaComponent', () => {
  let component: ProfileCtaComponent;
  let fixture: ComponentFixture<ProfileCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileCtaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
