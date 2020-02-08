import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }
  //execute when click menu button
  myFunction() {
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (width<830) {
      //open, close the menu
      var x = document.getElementById("myTopNav");

      if (x.className === "nav-list") {
        x.className += " responsive";
      } else {
        x.className = "nav-list";
      }

      var y = document.getElementById("myTopMenu");
      if (y.className === "menu-icons open") {
        y.className += " responsive";
      } else {
        y.className = "menu-icons open";
      }

      //nav-brand
      var z = document.getElementById("myTopBrand");
      if (z.className === "nav-brand") {
        z.className += " responsive";
      } else {
        z.className = "nav-brand";
      }
    }
  }
}
