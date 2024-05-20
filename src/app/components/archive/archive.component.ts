import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgFor } from '@angular/common';
import { MyNote } from '../note-list/note-list.component';
import { CreateNoteService } from '../../create-note-service';

@Component({
  selector: 'app-archive',
  standalone: true,
  imports: [HeaderComponent, NgFor],
  templateUrl: './archive.component.html',
  styleUrl: './archive.component.scss'
})
export class ArchiveComponent implements OnInit {
  archiveNotes: MyNote[] | undefined;

  constructor(private createNoteService: CreateNoteService) {}

  ngOnInit() {
    this.createNoteService.archivedNotes$.subscribe(notes => {
      this.archiveNotes = notes;
      console.log(notes)
    });
  }
}