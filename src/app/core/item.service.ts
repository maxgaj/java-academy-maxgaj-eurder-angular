import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

export enum StockUrgency {
  LOW = 'STOCK_LOW',
  MEDIUM = 'STOCK_MEDIUM',
  HIGH = 'STOCK_HIGH'
}

export interface Item {
  amountOfStock: number;
  description: string;
  id: string;
  name: string;
  price: number;
  stockUrgency: StockUrgency;
}

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
