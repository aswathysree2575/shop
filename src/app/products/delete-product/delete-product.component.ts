import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
   productId:any
  constructor(private activatedRoute:ActivatedRoute,private ProductService:ProductService,private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data)=>{
      this.productId=data['id']
      

      })
      this.ProductService.deleteProduct(this.productId)
      .subscribe((data)=>{
        alert('Product Deleted successfully')
        this.router.navigateByUrl('products')
      })

  }
}
