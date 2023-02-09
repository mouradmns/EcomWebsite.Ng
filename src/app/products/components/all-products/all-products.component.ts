
import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {product} from "../../models/Product";

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements  OnInit {
  products: product[] = [];
  categories: string[] = [];
  loading: boolean = false;
  cartProducts: any[] = []

  constructor(private service: ProductsService) {
  }


  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }


  getProducts() {
    this.loading = true;
    this.service.getAllProducts().subscribe((res: any) => {
        this.products = res;
        this.loading = false;
      }, error => {
        alert("error in link");
        console.log(error.message);
        this.loading = false;
      }
    )
  }

  getCategories() {
    this.loading = true;
    this.service.getAllCategories().subscribe((res: any) => {
        this.categories = res;
        this.loading = false;
      }, error => {
        alert("error in link");
        console.log(error.message);
        this.loading = false;
      }
    )
  }

  filterCategory(event: any) {
    this.loading = true;
    let value = event.target.value;
    (value === 'all') ? this.getProducts() :
      this.service.getProductByCategory(value).subscribe((res: any) => {
        this.products = res;
        this.loading = false;
      })
  }

  addToCart(event: any) {
    if ("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!);
          let exist =this.cartProducts.find(item => item.item.id ==event.item.id)
          if(exist) {
            alert("product already in your cart");
          }else {
          this.cartProducts.push(event);
          localStorage.setItem("cart",JSON.stringify(this.cartProducts ))
          }
    } else {
      this.cartProducts.push(event);
      localStorage.setItem("cart", JSON.stringify(this.cartProducts))

    }

  }
}
