import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
@Injectable()
export class ServicesNotes{
    constructor( public afDB: AngularFireDatabase){}
    /*
    notes = [
        {id:1,titulo:'Nota 1',descripcion:'Descripcion 1'},
        {id:4,titulo:'Nota 2',descripcion:'Descripcion 2'},
        {id:3,titulo:'Nota 3',descripcion:'Descripcion 3'},
        {id:4,titulo:'Nota 4',descripcion:'Descripcion 4'},
    
      ];
      */
     notes =[];
      public getNotes(){
          
         // return this.notes;
         return this.afDB.list('notas').valueChanges();
         //return this.afDB.list('notas/').valueChanges;
      }
      public getNote(id){
          console.log(id)
          console.log(this.notes.filter(function(e , i){ return e.id==id})[0] || {id:null,titulo:null,descripcion:null});
          return this.afDB.object('notas'+id);
          //return this.notes.filter(function(e , i){ return e.id==id})[0] || {id:null,titulo:null,descripcion:null};
      }

      public createNote(note){
        this.afDB.database.ref('notas/'+note.id).set(note);
        //  this.notes.push(note);
      }

      public editNote(note){
          for(let i=0;i< this.notes.length;i++){
              if(this.notes[i].id==note.id)
              {
                  this.notes[i]==note;
              }
          }
      }
      public deleteNote(note){
        for(let i=0;i< this.notes.length;i++){
            
            if(this.notes[i].id==note.id)
            {
                console.log("estoy viendo como gfunciona esta mierda"); 
                console.log(note.id+":"+this.notes[i].id+":"+i);
                this.notes.splice(i,1);
            }
        }
    }
}