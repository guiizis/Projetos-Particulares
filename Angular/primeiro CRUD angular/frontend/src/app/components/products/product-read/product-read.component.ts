import { Products } from './../products.model'
import { Component, OnInit } from '@angular/core'
import { ProductsService } from '../products.service'
import { DataSource } from '@angular/cdk/collections'

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css'],
})
export class ProductReadComponent implements OnInit {
  products: Products[]
  displayedColumns = ['id', 'name', 'price', 'action']

  constructor(private Service: ProductsService) {}

  ngOnInit(): void {
    this.Service.read().subscribe((Products) => {
      this.products = Products
    })
  }
}
