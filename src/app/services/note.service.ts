import { Injectable } from '@angular/core';
import Note from '../../models/Note';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  notes: Note[] = [];

  constructor() {
    this.loadNotes();
  }

  private loadNotes() {
    const storedNotes = localStorage.getItem('notes');
    this.notes = storedNotes ? JSON.parse(storedNotes) : [];
  }

  private saveNotes() {
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }

  getNotes() {
    return this.notes;
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

  createId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2);
  }
}
