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

  constructor(public noteService: NoteService) {}

  handleSubmit() {
    if (!this.noteTitle.trim()) return;

    const newNote: Note = {
      id: this.noteService.createId(),
      tittle: this.noteTitle,
      marked: false
    };

    this.noteService.createNote(newNote);
    this.noteTitle = "";
  }
}