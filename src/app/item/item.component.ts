import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { ItemWishlist } from '../models/item-wishlist.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() items: ItemWishlist;
  @HostBinding('attr.class') cssClass = 'col-md-4';

  constructor() { }

  ngOnInit(): void {
  }

}
