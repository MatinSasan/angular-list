import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface ExtraItem {
  id: number;
  avatar: string;
  name: string;
  age: number;
  position: string;
  year: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: ExtraItem[] = [
  {
    id: 1,
    avatar: 'https://randomuser.me/api/portraits/men/13.jpg',
    name: 'Boss',
    age: 50,
    position: 'CEO',
    year: 2004
  },
  {
    id: 2,
    avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
    name: 'Max',
    age: 26,
    position: 'Backend Dev',
    year: 2010
  },
  {
    id: 3,
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    name: 'Anna',
    age: 25,
    position: 'Frontend Dev',
    year: 2012
  },
  {
    id: 4,
    avatar: 'https://randomuser.me/api/portraits/men/82.jpg',
    name: 'John',
    age: 30,
    position: 'DB Admin',
    year: 2009
  },
  {
    id: 5,
    avatar: 'https://randomuser.me/api/portraits/women/90.jpg',
    name: 'Kate',
    age: 23,
    position: 'UI/UX Designer',
    year: 2014
  },
  {
    id: 6,
    avatar: 'https://randomuser.me/api/portraits/men/91.jpg',
    name: 'Michael',
    age: 28,
    position: 'Tester',
    year: 2010
  }
];

/**
 * Data source for the Extra view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ExtraDataSource extends DataSource<ExtraItem> {
  data: ExtraItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<ExtraItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(
      map(() => {
        return this.getPagedData(this.getSortedData([...this.data]));
      })
    );
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: ExtraItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: ExtraItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'id':
          return compare(+a.id, +b.id, isAsc);
        case 'position':
          return compare(a.position, b.position, isAsc);
        case 'year':
          return compare(a.year, b.year, isAsc);
        default:
          return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
