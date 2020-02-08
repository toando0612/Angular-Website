import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpenLinkService {

  constructor() { }

  //open link function
  onNavigate(url: string){
    window.location.href=url;
  }

}
