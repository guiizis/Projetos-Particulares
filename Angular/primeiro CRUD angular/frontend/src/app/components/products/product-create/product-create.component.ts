import { Products } from './../products.model'
import { Component, OnInit } from '@angular/core'
import { ProductsService } from '../products.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent implements OnInit {
  produto: Products = {
    name: '',
    price: 0,
  }
  constructor(private service: ProductsService, private router: Router) {}

  ngOnInit(): void {}

  createProduct(): void {
    this.service.create(this.produto).subscribe(() => {
      this.service.showMessage('Produto Criado Com Sucesso')
      this.router.navigate(['/products'])
    })
  }

  cancelCreateProduct(): void {
    this.router.navigate(['/products'])
  }
}
