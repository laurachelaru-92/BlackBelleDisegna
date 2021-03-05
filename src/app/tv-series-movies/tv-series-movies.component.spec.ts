import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvSeriesMoviesComponent } from './tv-series-movies.component';

describe('TvSeriesMoviesComponent', () => {
  let component: TvSeriesMoviesComponent;
  let fixture: ComponentFixture<TvSeriesMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvSeriesMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvSeriesMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
