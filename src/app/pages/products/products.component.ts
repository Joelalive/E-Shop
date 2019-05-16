import { ProductService, ProductInterface } from './../../providers/product.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  private catID: string;
  public products:Array<ProductInterface>=[];
  constructor(private product:ProductService, private route: ActivatedRoute ) { }

  ngOnInit() {

    this.catID = this.route.snapshot.params.id;
    console.log('FFF', this.catID);
    this
      .product
      .getProducts(this.catID)
      .subscribe((resp) => {
        console.log('prod',resp);
      });

      this
      .product
      .getProducts(this.catID)
      .subscribe((resp: any) => {
        this.products = []
        if (resp.data && Array.isArray(resp.data) && resp.data.length) {
          for (const item of resp.data) {
            this.products.push(item);
          }
        }
        console.log('products',this.products);
      });
  }

}
