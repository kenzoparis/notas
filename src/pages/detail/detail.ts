import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesNotes} from '../../services/notes.services'

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  note = {id:null, titulo:null, descripcion:null};
  id = null;
  constructor(public navCtrl: NavController, public navParams: NavParams,public noteService : ServicesNotes) {
    this.id = navParams.get('id');
    if(this.id==0){

    }else{
      noteService.getNote(this.id)
      .valueChanges().subscribe(nota  => {
        this.note = note
      }
        );
    }   
    
  }
  
  addNote(){
    if(this.id!=0){
      //estamos editando   
      this.noteService.editNote(this.note);
      
    }else{
      this.note.id= Date.now();
      this.noteService.createNote(this.note);
      
    }
    this.navCtrl.pop();
    
  }
  deleteNote(){
    this.noteService.deleteNote(this.note);
    console.log('Nota Eliminada'+this.note.id);
    this.navCtrl.pop();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
