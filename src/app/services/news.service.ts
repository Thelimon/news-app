import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

import {environment} from '../../environments/environment';
import {Article, RespuestaTopHeadlines} from '../interfaces';

const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) {
  }

  public getTopHeadlines(): Observable<Article[]> {
    return this.http.get<RespuestaTopHeadlines>(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey`, {
      params: {
        apiKey
      }
    }).pipe(map(({articles}) => articles));
  }
}
