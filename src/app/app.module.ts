import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { FridgeSafeReadComponent } from './fridge-safe-read/fridge-safe-read.component';

@NgModule({
    declarations: [
        AppComponent,
        FridgeSafeReadComponent
    ],
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule
    ],
    providers: [AngularFirestore],
    bootstrap: [AppComponent]
})
export class AppModule { }