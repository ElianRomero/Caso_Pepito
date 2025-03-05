import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NoteService } from '../../services/note.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-manager',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './category-manager.component.html',
  styleUrl: './category-manager.component.css'
})
export class CategoryManagerComponent {
  categoryName: string = '';

  constructor(public noteService: NoteService) {}

  addCategory() {
    if (!this.categoryName.trim()) return;
    this.noteService.createCategory(this.categoryName);
    this.categoryName = "";
  }

  deleteCategory(id: string) {
    this.noteService.deleteCategory(id);
  }
}
