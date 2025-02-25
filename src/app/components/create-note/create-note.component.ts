import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Note from '../../../models/Note';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-create-note',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-note.component.html',
  styleUrl: './create-note.component.css'
})
export class CreateNoteComponent {
  noteTitle: string = '';

  constructor(public noteService: NoteService) { }
 
  handleSubmit = () => {
    if (!this.noteTitle) return;
   
    const newNote: Note = {
      id: this.noteService.creteId(),
      tittle: this.noteTitle,
      marked: false
    }
    this.createNote(newNote);
  }
  createNote(newNote: Note){
    this.noteService.createNote(newNote).subscribe({
      next:() =>{
        this.getNotes();
        this.noteTitle = "";
      },
      error: (e) => {
        console.log(e);
      }
    })
  }
  getNotes(){
    this.noteService.getNotes().subscribe({
      next: (data) => {
       this.noteService.notes = data.reverse();
      },
      error: (e) => {
        console.log(e);
      }
    })
  }
}

