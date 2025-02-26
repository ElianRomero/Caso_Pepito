import { Component, Input } from '@angular/core';
import Note from '../../../models/Note';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-note-card',
  standalone: true,
  imports: [],
  templateUrl: './note-card.component.html',
  styleUrl: './note-card.component.css'
})
export class NoteCardComponent {
  @Input() note!: Note; 

  constructor(public noteService: NoteService) {}

  updateTitle(event: Event) {
    const inputHtml = event.target as HTMLInputElement;
    this.noteService.updateTitle(this.note.id!, inputHtml.value);
  }

  updateMarked() {
    this.noteService.updateMarked(this.note.id!);
  }

  deleteNote() {
    this.noteService.deleteNote(this.note.id!);
  }
}