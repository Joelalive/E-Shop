import { CategoryInterface } from './../../providers/product.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 @Input() menus: Array<CategoryInterface>;
  constructor() { }

  ngOnInit() {
    console.log('HeaderComponent', this.menus);
  }

}
