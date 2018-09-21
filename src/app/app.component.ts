import { Component } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  db;
  open;
  timeStamp;
  key;
  fridgeSafe$: Observable<any[]>;
  
  constructor(private af : AngularFireDatabase){
    this.fridgeSafe$ = this.af.list('/LedColorChosen').snapshotChanges().pipe(map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val()}));
    }));
  }

  
  ngOnInit()
  {
    console.log(this.fridgeSafe$);
  }

  public toggleLock(fridge: any): void
  {
    var current = new Date();

    this.af.object("/LedColorChosen/" + fridge.key)
      .update({timeStamp : current, open : !fridge.open});
    
  }
}