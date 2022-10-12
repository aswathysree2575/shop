import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  productId:any
  productDetails:any
  constructor(private ProductService:ProductService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data)=>{
      this.productId = data['id']
       console.log(this.productId);
       
    })
      this.ProductService.viewProduct(this.productId)
      .subscribe((data)=>{
        this.productDetails=data

      })
  }

}
