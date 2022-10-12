import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/products/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private ProductService:ProductService) {}

  ngOnInit(): void {
  }
   
  search(event:any){
    var searchTerm = event.target.value
    this.ProductService.search.next(searchTerm)    
  }
}
