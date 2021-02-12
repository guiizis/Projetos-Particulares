import { catchError, map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'
import { Router } from '@angular/router'
import { EMPTY, Observable } from 'rxjs'
import { Products } from './products.model'

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  baseURL: string = 'http://localhost:3001/products'

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private http: HttpClient,
  ) {}

  showMessage(msg: string, isError: boolean = false) {
    this.snackBar.open(msg, 'OK', {
      duration: 2500,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['error'] : ['success'],
    })
  }

  create(produto: Products): Observable<Products> {
    return this.http.post<Products>(this.baseURL, produto).pipe(
      map((obj) => obj),
      catchError((error) => this.handleError(error)),
    )
  }

  handleError(error: any): Observable<any> {
    this.showMessage('Erro ao tentar executar esta ação', true)
    return EMPTY
  }

  read(): Observable<Products[]> {
    return this.http.get<Products[]>(this.baseURL)
  }

  readById(id: string): Observable<Products> {
    const url = `${this.baseURL}/${id}`
    return this.http.get<Products>(url)
  }

  update(product: Products): Observable<Products> {
    const url = `${this.baseURL}/${product.id}`
    return this.http.put<Products>(url, product)
  }

  delete(id: string): Observable<Products> {
    const url = `${this.baseURL}/${id}`
    return this.http.delete<Products>(url)
  }
}
