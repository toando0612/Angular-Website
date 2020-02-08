import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//for google cloud storage
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {NO_ERRORS_SCHEMA } from '@angular/core';
import {ContactService} from './services/contact.service';
import {environment} from '../environments/environment';
import { HomeBlogComponent } from './home-blog/home-blog.component';
import { BlogIdDetailComponent } from './blog-id-detail/blog-id-detail.component';
import { HomeComponent } from './home/home.component';

//translation
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BlogService} from './services/blog.service';
import { AllBlogComponent } from './allblog/all-blog.component';
import { BlogCategoryDetailComponent } from './blog-category-detail/blog-category-detail.component';
import {TestComponent} from './test/test.component';

export const createTranslateLoader = (http: HttpClient) => {
  return new TranslateHttpLoader(http, "./assets/i18/", '.json');
};

const appRoutes: Routes = [
  { path: 'blogs', component: HomeBlogComponent, children:[
      {path: '', redirectTo: 'all',pathMatch:'full'},
      {path: 'all', component: AllBlogComponent},
      {path:'test', component: TestComponent},
      {path: ':blogId', component: BlogIdDetailComponent},
      {path: ':category', component:BlogCategoryDetailComponent}
    ]},
  { path: '', component: HomeComponent },

  { path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
];
@NgModule({
  declarations: [
      TestComponent,
    AppComponent,
    BlogIdDetailComponent,
    HomeComponent,
    HomeBlogComponent,
    AllBlogComponent,
    BlogCategoryDetailComponent
  ],
  imports: [
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
        }
      }),
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes,
        {enableTracing:true}),
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  exports:[RouterModule],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [ContactService, BlogService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
