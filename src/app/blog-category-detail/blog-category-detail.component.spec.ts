import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCategoryDetailComponent } from './blog-category-detail.component';

describe('BlogcategorydetailComponent', () => {
  let component: BlogCategoryDetailComponent;
  let fixture: ComponentFixture<BlogCategoryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogCategoryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogCategoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
