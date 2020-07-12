import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowInfoComponent } from './tv-show-info.component';

describe('TvShowInfoComponent', () => {
  let component: TvShowInfoComponent;
  let fixture: ComponentFixture<TvShowInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvShowInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
