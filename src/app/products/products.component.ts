import {Component,OnInit} from '@angular/core';
import {IProduct} from './products'

@Component({
    selector:'product-comp',
    templateUrl:'./products.component.html',
    //styles:['thead{color:green}','h3{color:red}']
    styleUrls:['./products.component.css']
})

export class ProductComponent implements OnInit{
  title:string="**** Product List ***";
  showImage:boolean=false;
  imgWidth=50;
  filterProduct="Leaf";

  constructor(){}

  products:IProduct[]=[
    {
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    },
    {
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    }
  ]

  ngOnInit():void{
    console.log("<<<<<<<<<<<<<<<<<<<<<<hiiiiii this is init>>>>>>>>")
  }
  toggleImage():void{
      this.showImage = !this.showImage
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
