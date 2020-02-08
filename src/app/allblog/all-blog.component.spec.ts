import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBlogComponent } from './all-blog.component';

describe('AllblogComponent', () => {
  let component: AllBlogComponent;
  let fixture: ComponentFixture<AllBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
