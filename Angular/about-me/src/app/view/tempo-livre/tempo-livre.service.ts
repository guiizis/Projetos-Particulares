import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TempoLivreService {

  apiKey: string = this.returnApiKey()
  baseUrl: string = "https://api.themoviedb.org/3/"
  language: string = "&language=pt-BR"

  constructor(private http: HttpClient) {

  }

  getMovie(movieId, type: string): Observable<any> {

    return this.http.get<any>(this.baseUrl + type + '/' + movieId + '?api_key=' + this.apiKey + this.language)

  }

  getBooks(Isbn: string): Observable<any> {
    const bookUrl = `https://openlibrary.org/api/books?bibkeys=ISBN:${Isbn}&jscmd=data&format=json`
    return this.http.get<any>(bookUrl)
  }

  returnApiKey(): string {
    return "e31072facd65c0a1275640c07901cb14"
  }
}
