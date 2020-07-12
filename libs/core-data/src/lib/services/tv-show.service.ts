import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TvShow } from '@thirty/api-interfaces';
import { Observable } from 'rxjs';

export const BASE_URL = 'https://thirtyxthirty-lessons.herokuapp.com/tvshows';

@Injectable({
  providedIn: 'root'
})
export class TvShowService {

  constructor(private http: HttpClient) { }

  getTvShows(): Observable<[TvShow]> {
    return this.http.get<[TvShow]>(BASE_URL);
  }

  deleteTvShow(tvshow: TvShow) {
    return this.http.delete(BASE_URL + "/" + tvshow.id);
  }

  createTvShow(tvshow: TvShow) {
    return this.http.post(BASE_URL, tvshow);
  }

  updateTvShow(tvshow: TvShow){
    return this.http.put(BASE_URL + "/" + tvshow.id, tvshow);
  }
}
