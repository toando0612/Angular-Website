import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Blog, BlogService} from '../services/blog.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {DictionaryService} from '../services/dictionary.service';
import {async} from '@angular/core/testing';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-id-detail.component.html',
  styleUrls: ['./blog-id-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlogIdDetailComponent implements OnInit {
  blogId: string;
  blogDetail: Observable<Blog>


  getBlogById = (id: string) =>{
      this.blogDetail = this.blogService.getBlogById(id).valueChanges()
  }
  myFunction1() {
    document.getElementById("myframe")
  }

  constructor(private blogService: BlogService, private route: ActivatedRoute, public dictionary: DictionaryService) {
    this.route.params.subscribe(params=>this.blogId = params.blogId)
    // console.log('constructor(): '+this.blogId)

  }

  ngOnInit() {
    console.log('initinitinit')
    this.getBlogById(this.blogId)

    // console.log('ngOnInit(): '+this.blogId)
  }
}
