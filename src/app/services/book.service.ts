import {Injectable} from '@angular/core';
import {Book} from "../models/Book";
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root',
})
export class BookService {

  constructor(private http: HttpClient) {
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(environment.serverUrl + "/get-books");
  }
}
