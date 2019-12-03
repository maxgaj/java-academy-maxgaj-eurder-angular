import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';

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
  private itemUrl = '/items';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient
  ) {
  }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemUrl)
      .pipe(
        tap(_ => this.log('fetched items')),
        catchError(this.handleError<Item[]>('getItems', []))
      );
  }

  getItem(id: string): Observable<Item> {
    const url = `${this.itemUrl}/${id}`;
    return this.http.get<Item>(url).pipe(
      tap(_ => this.log(`fetched item with id=${id}`)),
      catchError(this.handleError<Item>(`getHero id=${id}`))
    );
  }

  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.itemUrl, item, this.httpOptions)
      .pipe(
        tap((newItem: Item) => this.log(`added item w/ id=${newItem.id}`))
      );
  }

  updateItem(item: Item, id: string) {
    const url = `${this.itemUrl}/${id}`;
    return this.http.put<Item>(url, item, this.httpOptions).pipe(
      tap((updatedItem: Item) => this.log(`updated item with id=${updatedItem.id}`)),
    );
  }


  log(message: string): void {
    console.log(`HeroService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
