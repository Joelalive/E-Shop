import { Component, OnInit, Input } from '@angular/core';
import { CategoryInterface } from 'src/app/providers/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() menus: Array<CategoryInterface>;
  constructor() { }

  ngOnInit() {
    
  }

}
