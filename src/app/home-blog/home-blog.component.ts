import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MenuService} from '../services/menu.service';
import {BlogService} from '../services/blog.service';
import {OpenLinkService} from '../services/open-link.service';
import {DictionaryService} from '../services/dictionary.service';
import {ActivatedRoute, Routes} from '@angular/router';
import {AllBlogComponent} from '../allblog/all-blog.component';
import {BlogIdDetailComponent} from '../blog-id-detail/blog-id-detail.component';
import {BlogCategoryDetailComponent} from '../blog-category-detail/blog-category-detail.component';
import {HomeComponent} from '../home/home.component';
import {SubscribeService} from '../services/subscribe.service';

@Component({
  selector: 'app-home-blog',
  templateUrl: './home-blog.component.html',
  styleUrls: ['./home-blog.component.scss','../shared-styles/header.scss','../app.component.scss','../shared-styles/language-option.scss']
})
export class HomeBlogComponent implements OnInit {
  submitted = false
  get email() {return this.subscribeService.form.get('email');}


  constructor(
      public subscribeService: SubscribeService,
      private route: ActivatedRoute,
      public openLink: OpenLinkService,
      public dictionary: DictionaryService,
      public menuService: MenuService,
      private blogService: BlogService
  ){
    this.route.parent.params.subscribe(params => console.log(params)); // Object {artistId: 12345}
  }

  //scroll to specific view by click
  scroll(el: HTMLElement) {
    //scroll
    el.scrollIntoView({behavior:"smooth"});

    //close the menu
    var x = document.getElementById("myTopNav");
    if (x.className === "nav-list responsive") {
      x.className = "nav-list";
    }
    var y = document.getElementById("myTopMenu");
    if (y.className === "menu-icons open responsive") {
      y.className = "menu-icons open";
    }
  }

  ngOnInit() {
    window.scroll(0,0)

  }
  onSubscribe(){
    console.log('subscribe')
    if (this.subscribeService.form.valid){
      let data = this.subscribeService.form.value;
      let ref = this.subscribeService.firestore.collection('subscribers').add(data)
          .then(ref =>this.subscribeService.form.patchValue({'id': ref.id}))
          .then(()=>this.subscribeService.form.reset()).then(()=>this.submitted=true)
    }else {
    }
  }

}
