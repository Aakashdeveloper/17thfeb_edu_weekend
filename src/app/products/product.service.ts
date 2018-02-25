import {Injectable} from '@angular/core';
import {IProduct} from './products';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class ProductService{

    private _productUrl ="https://ngapi4.herokuapp.com/api/getProducts";

    constructor(private _http:Http){}

    getProducts():Observable<IProduct[]>{
        return this._http.get(this._productUrl)
            .map((response:Response)=> <IProduct[]> response.json())
            .catch(this.handleError);
    }

    private handleError(error:Response){
        return Observable.throw(error.json().error|| "Server Error")
    }
}

/*
function sub(a,b){
    return a-b
}

sub(3,2)
*/