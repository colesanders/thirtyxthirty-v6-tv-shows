import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { TvShowService } from '@thirty/core-data';
import { MaterialModule } from '@thirty/material';
import { of } from 'rxjs';
import { TvShowComponent } from './tv-show.component';
import { TvShow } from '@thirty/api-interfaces';
import { TvShowInfoComponent } from './tv-show-info/tv-show-info.component';
import { TvShowListComponent } from './tv-show-list/tv-show-list.component';

const mockEmptyTvShow: TvShow = {
  id: null,
  name: 'Mock Empty TvShow',
  description: '',
  type: '',
  price: 0,
  stars: 1,
};

const mockTvShow = {
  id: 1,
  name: 'Mock TvShow',
  description: 'Mock descr',
  type: 'sit-com',
  price: 0,
  stars: 1,
};

const mockTvShowService = {
  getTvShows: () => of([]),
  createTvShow: () => of({}),
  updateTvShow: () => of({}),
  deleteTvShow: () => of({})
}

describe('TvShowComponent', () => {
  let component: TvShowComponent;
  let fixture: ComponentFixture<TvShowComponent>;
  let de: DebugElement;
  let tvShowService: TvShowService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientModule,
        MaterialModule,
        NoopAnimationsModule,
        RouterTestingModule,
      ],
      providers: [
        { provide: TvShowService, useValue: mockTvShowService }
      ],
      declarations: [
        TvShowComponent,
        TvShowInfoComponent,
        TvShowListComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    tvShowService = de.injector.get(TvShowService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select a tvShow', () => {
    component.selectTvShow(mockTvShow);
    expect(component.tvshowForm.value).toMatchSnapshot();
  });
});
