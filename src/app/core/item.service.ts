import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Item} from './item';
import {catchError, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private itemUrl = 'http://localhost:9000/items';

  constructor(
    private http: HttpClient
  ) { }

  getHeroes(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemUrl)
      .pipe(
        tap(_ => this.log('fetched items')),
        catchError(this.handleError<Item[]>('getItems', []))
      );
  }


  private log(message: string) {
    console.log(`HeroService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }


}
