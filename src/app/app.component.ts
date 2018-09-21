import { Component } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable, Timestamp, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export interface Safe { Open: boolean; IsDemo: boolean; TimeStamp: Object }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  safeCollection : AngularFirestoreCollection<Safe>;
  safes: Observable<Safe[]>;
  
  constructor(private af : AngularFirestore){
    // this.fridgeSafe$ = this.af.list('/Safes').snapshotChanges().pipe(map(changes => {
    //   return changes.map(c => ({ key: c.payload.key, ...c.payload.val()}));
    // }));
    
    this.safeCollection = this.af.collection<Safe>('Safes', ref =>  ref.where('IsDemo', '==', true));


    this.safes = this.safeCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Safe;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    }, catchError(err => of([]))));
  }

  
  ngOnInit()
  {
  }

  public toggleLock(safe: any): void
  {
    const timestamp = firebase.firestore.FieldValue.serverTimestamp();
    this.safeCollection.doc(safe.id).update({TimeStamp : timestamp, Open : !safe.Open, IsDemo : safe.IsDemo});    
  }
}