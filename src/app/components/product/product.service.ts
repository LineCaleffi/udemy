import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  showOnConsole(msg:string): void{
    console.log(msg);
  }

}
