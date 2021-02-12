import { Products } from './../products.model'
import { ActivatedRoute, Router } from '@angular/router'
import { ProductsService } from './../products.service'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css'],
})
export class ProductDeleteComponent implements OnInit {
  produto: Products
  id: string
  constructor(
    private service: ProductsService,
    private router: Router,
    private routes: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.id = this.routes.snapshot.paramMap.get('id') || ''

    this.service.readById(this.id).subscribe((Product) => {
      this.produto = Product
    })
  }

  cancelDeleteProduct(): void {
    this.router.navigate(['/products'])
  }

  deleteProduct(): void {
    this.service.delete(this.id).subscribe(() => {
      this.service.showMessage('Produto Deletado com Sucesso')
      this.router.navigate(['/products'])
    })
  }
}
