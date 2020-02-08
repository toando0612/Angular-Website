import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
        constructor(private firestore: AngularFirestore) {  }
    form = new FormGroup({
    id: new FormControl(null),
    firstName: new FormControl('',[Validators.required, Validators.minLength(2)]),
    lastName: new FormControl('',[Validators.required, Validators.minLength(2)]),
    email: new FormControl('',[Validators.email, Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.minLength(9)]),
    position: new FormControl('', [Validators.required]),
    company: new FormControl('', [Validators.required]),
});





}
