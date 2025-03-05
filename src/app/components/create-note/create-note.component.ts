import { FormsModule } from '@angular/forms';
import Note from '../../../models/Note';
import { NoteService } from '../../services/note.service';
import Category from '../../../models/Category';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-create-note',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-note.component.html',
  styleUrl: './create-note.component.css'
})
export class CreateNoteComponent  implements OnInit{
  noteTitle: string = '';
  @Input() selectedCategory: string = '';
  categories: Category[] = [];
    
  constructor(public noteService: NoteService) {
    this.categories = this.noteService.getCategories();
  }
  ngOnInit(): void {
    // Initialize the selected category if not already set
    if (!this.selectedCategory && this.categories.length > 0) {
      this.selectedCategory = this.categories[0].name;
    }
  }

  handleSubmit() {
    if (!this.noteTitle.trim() || !this.selectedCategory) return;

    const newNote: Note = {
      id: this.noteService.createId(),
      tittle: this.noteTitle,
      marked: false,
      category: this.selectedCategory
    };

    this.noteService.createNote(newNote);
    this.noteTitle = "";
  }
}
