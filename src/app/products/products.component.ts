import {Component,OnInit} from '@angular/core';
import {IProduct} from './products';
import {ProductService} from './product.service';

@Component({
    templateUrl:'./products.component.html',
    //styles:['thead{color:green}','h3{color:red}']
    styleUrls:['./products.component.css']
})

export class ProductComponent implements OnInit{
  title:string="**** Product List ***";
  showImage:boolean=false;
  imgWidth=50;
  filterProduct;
  errorMessage:string;
  products:IProduct[]

  constructor( private _productService:ProductService){}

  ngOnInit():void{
    this._productService.getProducts()
        .subscribe((products) => this.products = products,
                        error=>this.errorMessage = <any>error)
  }

  toggleImage():void{
      this.showImage = !this.showImage
  }

  onRatingClicked(message:string): void{
      this.title="Product list::::>>"+ message
  }
}



/*
--one way binding
    *Data Binding{{}}
    *Property Binding[]
    *Event Binding()
--two way binding[()]
var a =10
b=10
*/
