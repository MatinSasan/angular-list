export class Person {
  public id: number;
  public avatar: string;
  public name: string;
  public age: number;
  public position: string;
  public year: number;

  constructor(
    id: number,
    avatar: string,
    name: string,
    age: number,
    position: string,
    year: number
  ) {
    this.id = id;
    this.avatar = avatar;
    this.name = name;
    this.age = age;
    this.position = position;
    this.year = year;
  }
}

// export interface Persons {
//   id: number;
//   avatar: string;
//   name: string;
//   age: number;
//   position: string;
//   year: number;
// }

// export const units: Persons[] = [
//   {
//     id: 1,
//     avatar: 'https://randomuser.me/api/portraits/men/13.jpg',
//     name: 'Boss',
//     age: 50,
//     position: 'CEO',
//     year: 2004
//   },
//   {
//     id: 2,
//     avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
//     name: 'Max',
//     age: 26,
//     position: 'Backend Dev',
//     year: 2010
//   },
//   {
//     id: 3,
//     avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
//     name: 'Anna',
//     age: 25,
//     position: 'Frontend Dev',
//     year: 2012
//   },
//   {
//     id: 4,
//     avatar: 'https://randomuser.me/api/portraits/men/82.jpg',
//     name: 'John',
//     age: 30,
//     position: 'DB Admin',
//     year: 2009
//   },
//   {
//     id: 5,
//     avatar: 'https://randomuser.me/api/portraits/women/90.jpg',
//     name: 'Kate',
//     age: 23,
//     position: 'UI/UX Designer',
//     year: 2014
//   },
//   {
//     id: 6,
//     avatar: 'https://randomuser.me/api/portraits/men/91.jpg',
//     name: 'Michael',
//     age: 28,
//     position: 'Tester',
//     year: 2010
//   }
// ];
