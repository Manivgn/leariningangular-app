import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'
import {Author} from '../models/Author';
@Injectable({
  providedIn: 'root'
})
export class AuthorsDataService {
  private apiUrl = 'http://127.0.0.1:5000/api/authors' ;

  constructor(private http : HttpClient) { }

  getAuthors() : Observable<Author[]>{
    return this.http.get<Author[]>(this.apiUrl);
  }

  deleteAuthor(author : Author) : Observable<Author> {
    return this.http.delete<Author>(`${this.apiUrl}/${author._id}`) ;
  }

  addAuthor(fullName : string, year_Born : number, technology : string, profile : string) : Observable<Author>{
    return this.http.post<Author>(this.apiUrl, {fullName, year_Born, technology, profile}) ;
  }

  
}
