import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBlogComponent } from './home-blog.component';

describe('BlogListComponent', () => {
  let component: HomeBlogComponent;
  let fixture: ComponentFixture<HomeBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
