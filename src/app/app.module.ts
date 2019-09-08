import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {ServicesNotes } from '../services/notes.services'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetailPage} from '../pages/detail/detail';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth'; 

export const firebaseConfig = {
  apiKey: "AIzaSyCVmiVlzwKagvNNNKlgGnir4GNOlGfIn7s",
  authDomain: "notas-3c04e.firebaseio.com",
  databaseURL: "https://notas-3c04e.firebaseio.com/",
  storageBucket: "notas-3c04e.firebaseapp.com",
  messagingSenderId: '1:29629822337:web:63282f1ef6161306ed2480'
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ServicesNotes,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
