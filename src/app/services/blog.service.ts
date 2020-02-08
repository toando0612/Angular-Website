import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

export interface Blog{
  titleEn: string
  titleVi: string
  imageUrl: string
  author: string
  avatar: string
  category: string
  contentEn: string
  contentVi: string

}
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private firestore:AngularFirestore) { }

  getBlogList(){
    return this.firestore.collection('blogs').snapshotChanges();
  }
  getBlogById(id: string){
    return this.firestore.doc<Blog>(`blogs/${id}`)
  }
}
