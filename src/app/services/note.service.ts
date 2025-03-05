import { Injectable } from '@angular/core';
import Note from '../../models/Note';
import Category from '../../models/Category';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  notes: Note[] = [];
  categories: Category[] = [];

  constructor() {
    this.loadNotes();
    this.loadCategories();
  }

  private loadNotes() {
    const storedNotes = localStorage.getItem('notes');
    this.notes = storedNotes ? JSON.parse(storedNotes) : [];
  }

  private saveNotes() {
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }

  private loadCategories() {
    const storedCategories = localStorage.getItem('categories');
    this.categories = storedCategories ? JSON.parse(storedCategories) : [];
  }

  private saveCategories() {
    localStorage.setItem('categories', JSON.stringify(this.categories));
  }

  getNotes() {
    return this.notes;
  }

  getNotesByCategory(category: string) {
    return this.notes.filter(note => note.category === category);
  }

  createNote(note: Note) {
    this.notes.push(note);
    this.saveNotes();
  }

  updateTitle(id: string, newTitle: string) {
    const note = this.notes.find(n => n.id === id);
    if (note) {
      note.tittle = newTitle;
      this.saveNotes();
    }
  }

  updateMarked(id: string) {
    const note = this.notes.find(n => n.id === id);
    if (note) {
      note.marked = !note.marked;
      this.saveNotes();
    }
  }

  deleteNote(id: string) {
    this.notes = this.notes.filter(n => n.id !== id);
    this.saveNotes();
  }

  createCategory(name: string) {
    const newCategory: Category = {
      id: this.createId(),
      name
    };
    this.categories.push(newCategory);
    this.saveCategories();
  }

  deleteCategory(id: string) {
    this.categories = this.categories.filter(c => c.id !== id);
    this.notes = this.notes.filter(n => n.category !== id);
    this.saveCategories();
    this.saveNotes();
  }

  getCategories() {
    return this.categories;
  }

  createId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2);
  }
}
