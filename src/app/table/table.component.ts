import { Person } from './../persons.model';

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  persons: Person[] = [
    new Person(
      1,
      'https://randomuser.me/api/portraits/men/13.jpg',
      'Boss',
      50,
      'CEO',
      2004
    ),
    new Person(
      2,
      'https://randomuser.me/api/portraits/men/86.jpg',
      'Max',
      26,
      'Backend Dev',
      2010
    ),
    new Person(
      3,
      'https://randomuser.me/api/portraits/women/65.jpg',
      'Anna',
      25,
      'Frontend Dev',
      2012
    ),
    new Person(
      4,
      'https://randomuser.me/api/portraits/men/82.jpg',
      'John',
      30,
      'DB Admin',
      2009
    ),
    new Person(
      5,
      'https://randomuser.me/api/portraits/women/90.jpg',
      'Kate',
      23,
      'UI/UX Designer',
      2014
    ),
    new Person(
      6,
      'https://randomuser.me/api/portraits/men/91.jpg',
      'Michael',
      28,
      'Tester',
      2010
    )
  ];

  removeEl(i) {
    this.persons.splice(i, 1);
  }

  constructor() {}

  ngOnInit() {}
}
