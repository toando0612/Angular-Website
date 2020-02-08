import { Component, OnInit } from '@angular/core';
import {OpenLinkService} from '../services/open-link.service';
import {DictionaryService} from '../services/dictionary.service';
import {MenuService} from '../services/menu.service';
import {BlogService} from '../services/blog.service';

@Component({
  selector: 'app-all-blog',
  templateUrl: './all-blog.component.html',
  styleUrls: ['./all-blog.component.scss']
})
export class AllBlogComponent implements OnInit {
  todayNumber: number = Date.now();
  blogList;
  getBlogList = () =>
      this.blogService
          .getBlogList()
          .subscribe(res =>(this.blogList = res));

  constructor(public openLink: OpenLinkService,public dictionary: DictionaryService,
              private blogService: BlogService) { }

  ngOnInit() {
    this.getBlogList()
  }

}
