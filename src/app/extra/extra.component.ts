import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ExtraDataSource, ExtraItem } from './extra-datasource';
import { MatDialog } from '@angular/material';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.css']
})
export class ExtraComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<ExtraItem>;
  dataSource: ExtraDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'avatar', 'position', 'year'];

  constructor(private dialog: MatDialog) {}

  // my custom function
  showDialog(row) {
    console.log(row);
    this.dialog.open(ListComponent, {
      data: {
        Id: row.id,
        Avatar: row.avatar,
        Name: row.name,
        Position: row.position,
        Year: row.year
      }
    });
  }

  ngOnInit() {
    this.dataSource = new ExtraDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
