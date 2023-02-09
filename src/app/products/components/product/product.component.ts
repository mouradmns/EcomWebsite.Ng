import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {product} from "../../models/Product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
    @Input() data!:product
    @Output() item = new EventEmitter();
    addProduct:boolean = false;
    amount: number = 0;
  ngOnInit(): void {
  }

  add() {
      this.item.emit({item:this.data,quantity:this.amount});
  }
}
