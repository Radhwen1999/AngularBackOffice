import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Store} from '../../models/store';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StoreService {
  // tslint:disable-next-line:variable-name
  readonly ADD_Store = 'http://localhost:8089/kaddem/store/addStore';


  constructor(private httpClient: HttpClient) { }
  addStore(store: Store): Observable<any> {
    return this.httpClient.post(this.ADD_Store, store);
  }
}
