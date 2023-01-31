import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements  OnInit {
  products: any[] = [];
  categories: any[] = [];

  constructor(private service: ProductsService) {
  }


  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }


  getProducts() {
    this.service.getAllProducts().subscribe((res: any) => {
        this.products = res;
      }, error => {
        alert("error in link");
        console.log(error.message);
      }
    )
  }

  getCategories() {
    this.service.getAllCategories().subscribe((res: any) => {
        this.categories = res;
        console.log(res);
      }, error => {
        alert("error in link");
        console.log(error.message);
      }
    )
  }

  filterCategory(event: any) {
    let value = event.target.value;
    if (value == 'all') {
      console.log(value);
      this.getProducts()
    } else {
      this.service.getProductByCategory(value).subscribe((res: any) => {
        this.products = res;
      })
    }
  }
}
