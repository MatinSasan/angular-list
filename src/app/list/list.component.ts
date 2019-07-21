import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  id;
  avatar;
  name;
  position;
  year;

  constructor(
    private dialogRef: MatDialogRef<ListComponent>,
    @Inject(MAT_DIALOG_DATA) { Id, Avatar, Name, Position, Year }
  ) {
    this.id = Id;
    this.avatar = Avatar;
    this.name = Name;
    this.position = Position;
    this.year = Year;
  }

  ngOnInit() {}
}
