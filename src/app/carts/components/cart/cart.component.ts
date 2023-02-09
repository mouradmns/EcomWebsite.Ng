import { Component, OnInit } from '@angular/core';
import {CartsService} from "../../services/carts.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor( private service:CartsService) {}
  cartProducts:any[] = [];
  total:any = 0;
  sucess: boolean = false;
  ngOnInit(): void {
    this.getCartsProducts();
  }

getCartsProducts(){
    if("cart" in localStorage){
        this.cartProducts = JSON.parse(localStorage.getItem("cart")!);
    }
    this.getCartTotal();
}


  getCartTotal(){
this.total=0;
for(let x in this.cartProducts){
  this.total +=this.cartProducts[x].item.price*this.cartProducts[x].quantity;
}
  }

  AddAmount(index: any) {
      this.cartProducts[index].quantity++;
      localStorage.setItem("cart", JSON.stringify(this.cartProducts));
      this.getCartTotal()
  }

  minAmount(index: any) {
    this.cartProducts[index].quantity--;
    localStorage.setItem("cart", JSON.stringify(this.cartProducts));
    this.getCartTotal()
  }

  detectChange() {
    localStorage.setItem("cart", JSON.stringify(this.cartProducts));
    this.getCartTotal()
  }

  deletsProduct(index: number) {
    this.cartProducts.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(this.cartProducts));
    this.getCartTotal()
  }

  clearCArt() {
    this.cartProducts=[]
    localStorage.setItem("cart", JSON.stringify(this.cartProducts));
    this.getCartTotal()
  }

  addCart() {
    let products=this.cartProducts.map(item =>{
      return{productId:item.item.id,quantity:item.quantity}
    });

    let Model={
      userId:10,
      date:new Date(),
      products:products
    }

    this.service.createNewCart(Model).subscribe(res => {
        this.sucess=true;
    })
    console.log(Model);
  }


}
