import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor(public  firestore: AngularFirestore,
  ) { }
  form = new FormGroup({
    id: new FormControl(null),
    email: new FormControl('',[Validators.email, Validators.required])})
}
