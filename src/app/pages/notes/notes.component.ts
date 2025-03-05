import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { NoteService } from '../../services/note.service';
import { CommonModule } from '@angular/common';
import { NoteCardComponent } from '../../components/note-card/note-card.component';
import { CreateNoteComponent } from '../../components/create-note/create-note.component';
import Note from '../../../models/Note';
import { FormsModule } from '@angular/forms';
import { CategoryManagerComponent } from '../../components/category-manager/category-manager.component';

export @Component({
  selector: 'app-notes',
  standalone: true,
  imports: [HeaderComponent, NoteCardComponent, CommonModule, FormsModule, CategoryManagerComponent, CreateNoteComponent],
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
  selectedCategory: string = '';

  filterNotes() {
    return this.selectedCategory
      ? this.noteService.getNotesByCategory(this.selectedCategory)
      : this.noteService.getNotes();
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