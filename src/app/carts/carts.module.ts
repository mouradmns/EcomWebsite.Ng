import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import {MatCardModule} from "@angular/material/card";
import {MatLegacyButtonModule} from "@angular/material/legacy-button";



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatLegacyButtonModule
  ]
})
export class CartsModule { }
