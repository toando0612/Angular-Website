import { Injectable } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor(
      public translate: TranslateService,
  ){
    translate.addLangs(['EN', 'VI']);
    if (localStorage.getItem('locale')) {
      const browserLang = localStorage.getItem('locale');
      translate.use(browserLang.match(/EN|VI/) ? browserLang : 'EN');
    } else {
      localStorage.setItem('locale', 'EN');
      translate.setDefaultLang('EN');
    }
  }

  changeLang(language: string) {
    console.log('change')
    localStorage.setItem('locale', language);
    this.translate.use(language);
  }
  changeLangAndReload(language: string) {
    console.log('change')
    localStorage.setItem('locale', language);
    this.translate.use(language);
    window.location.reload()
  }
}
