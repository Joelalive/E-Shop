import { ProductService, ProductInterface } from './../../providers/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public price: string;
  public products: Array<ProductInterface> = [];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    
  }

}
