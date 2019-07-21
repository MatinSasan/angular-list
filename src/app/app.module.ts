import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { TableComponent } from './table/table.component';
import { AppRoutingModule } from './app-router.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatDialogModule,
  MatButtonModule,
  MatToolbarModule,
  MatTableModule,
  MatCardModule
} from '@angular/material';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { ExtraComponent } from './extra/extra.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TableComponent,
    PageNotFoundComponent,
    HeaderComponent,
    ExtraComponent
  ],
  imports: [
    BrowserModule,
    // add-ons for VIEW
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatCardModule,
    // routing
    AppRoutingModule,
    MatPaginatorModule,
    MatSortModule
  ],
  entryComponents: [ListComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
