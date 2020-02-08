import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogIdDetailComponent } from './blog-id-detail.component';

describe('BlogDetailComponent', () => {
  let component: BlogIdDetailComponent;
  let fixture: ComponentFixture<BlogIdDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogIdDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogIdDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
