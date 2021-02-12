import { Products } from './../products.model'
import { ActivatedRoute, Router, Routes } from '@angular/router'
import { ProductsService } from './../products.service'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css'],
})
export class ProductUpdateComponent implements OnInit {
  produto: Products

  constructor(
    private service: ProductsService,
    private router: Router,
    private routes: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const id = this.routes.snapshot.paramMap.get('id') || ''

    this.service.readById(id).subscribe((Produtc) => {
      this.produto = Produtc
    })
  }

  updateProduct(): void {
    this.service.update(this.produto).subscribe((Product) => {
      this.service.showMessage('Produto Alterado Com Sucesso')
      this.router.navigate(['/products'])
    })
  }

  cancelUpdateProduct(): void {
    this.router.navigate(['/products'])
  }
}
