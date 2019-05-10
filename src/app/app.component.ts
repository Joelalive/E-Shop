import { Component } from '@angular/core';
import { ProductService, ProductInterface, CategoryInterface } from './providers/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-app';
  public categories: Array<CategoryInterface> = [];
  constructor(private productService: ProductService) { 

  }

  ngOnInit() {
    console.log('DDDDDDDDDDDD');
    this
      .productService
      .getCategories()
      .subscribe((resp: any) => {
        this.categories = []
        if (resp.data && Array.isArray(resp.data) && resp.data.length) {
          for (const item of resp.data) {
            this.categories.push(item);
          }
        }
        console.log(this.categories);
        //this.price = resp.USD_PHP;
      });
  }
}
