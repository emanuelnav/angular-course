import { Component, OnInit } from '@angular/core';
import { ItemWishlist } from '../models/item-wishlist.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: ItemWishlist[];
  constructor() {
    this.items = [];
   }

  ngOnInit(): void {
  }

  save(name:string, url:string):boolean {
    this.items.push(new ItemWishlist(name, url))
    return false;
  }

}
