import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  
  productId:any
  productDetails:any
 
   constructor(private activatedRoute:ActivatedRoute,private ProductService:ProductService,private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data)=>{
      this.productId =data['id']
    })
    this.ProductService.viewProduct(this.productId)
    .subscribe((data)=>{
      this.productDetails =data
      console.log(this.productDetails);
      
    })
  }

    updateProduct(form:any){
      var updatedProduct={
        id:form.value.id ,
          productName:form.value.productName,
          categoryId: form.value.categoryId,
          description:form.value.description,
          price:form.value.price,
          is_available:form.value.is_available,
          productImg:form.value.productImg,
          rating:form.value.rating,
          review:form.value.review,
          vendor_name:form.value.vendor_name,
          warranty:form.value.warranty
 
    }
    console.log(form);
    this.ProductService.updateProduct(this.productId,updatedProduct)
    .subscribe((data)=>{
      alert('Product successfully updated')
      this.router.navigateByUrl('products')

    })
}
}
