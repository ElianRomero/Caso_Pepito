import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { NoteService } from '../../services/note.service';
import { CommonModule } from '@angular/common';
import { NoteCardComponent } from '../../components/note-card/note-card.component';
import { CreateNoteComponent } from '../../components/create-note/create-note.component';
import Note from '../../../models/Note';

export @Component({
  selector: 'app-notes',
  standalone: true,
  imports: [HeaderComponent, NoteCardComponent, CreateNoteComponent, CommonModule],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
 class NotesComponent implements OnInit {
  isLoading: boolean = true;
  hasError: boolean = false;
  notes: Note[] = [];

  constructor(public noteService: NoteService) {}

  ngOnInit(): void {
    this.loadNotes();
  }

  loadNotes(): void {
    try {
      this.notes = this.noteService.getNotes();             
      this.isLoading = false;
    } catch (error) {
      console.error('Error cargando notas:', error);
      this.hasError = true;
      this.isLoading = false;
    }
  }

  trackById(index: number, note: Note): string {
    return note.id;
  }
}