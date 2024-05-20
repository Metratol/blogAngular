import { Component } from "@angular/core";
import {ArchiveComponent } from '../archive/archive.component';
import { NoteFormComponent } from '../note-form/note-form.component';
import { HeaderComponent } from '../header/header.component';



@Component({
    selector:'app-aside',
    standalone: true,
    imports: [HeaderComponent,NoteFormComponent,ArchiveComponent],
    templateUrl: './aside.component.html',
    styleUrl: './aside.component.scss'
})
export class AsideComponent{

}