import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { text } from '@angular/core/src/render3/instructions';
import { ServicesNotes } from '../../services/notes.services'
import { DetailPage } from '../detail/detail';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  notes =[];
  @ViewChild('myNav') nav:NavController
  constructor(public navCtrl: NavController, public noteService: ServicesNotes) {
    //this.notes = noteService.getNotes().valueChanges();
   
    noteService.getNotes()
    .subscribe( notes => {
        this.notes = notes;
      });

  }
  public gotoDetail(id){
    this.navCtrl.push(DetailPage,{id:id});
  }
  public createNote(){
    this.navCtrl.push(DetailPage,{id:0});
  }
}
