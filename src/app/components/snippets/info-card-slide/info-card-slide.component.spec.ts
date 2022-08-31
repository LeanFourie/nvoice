import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCardSlideComponent } from './info-card-slide.component';

describe('InfoCardSlideComponent', () => {
  let component: InfoCardSlideComponent;
  let fixture: ComponentFixture<InfoCardSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCardSlideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoCardSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
