import { Component, OnInit, Input } from '@angular/core';
import { CategoryInterface } from 'src/app/providers/product.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() menus: Array<CategoryInterface>;
  private profileForm: FormGroup;
  constructor() { 
    this.profileForm = new FormGroup({
      search: new FormControl('')
    });
  }

  ngOnInit() {
    
  }

  goSearch() {
    console.log(this.profileForm.value);
  }
}
