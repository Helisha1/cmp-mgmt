import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {

  columnHeadings = [{value:'e_id', viewValue:'Employee ID'}, 
                    {value:'name', viewValue:'Name'}, 
                    {value:'designation',viewValue:'Designation'},
                    { value:'salary',viewValue:'Salary'},
                    {value:'joining_date',viewValue:'Joining date'} ];
  displayedColumns = ['e_id', 'name', 'designation', 'salary', 'joining_date'];
  dataSource = new MatTableDataSource(EMPLOYEE_DATA);

  filter: string;
  selectedColumn: string;
  lastFilterLength: number = 0;
  column: string ;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {}

  ngAfterViewInit() {
    this.updateSortAndPaginator();
  }

  updateSortAndPaginator() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) { console.log(this.selectedColumn);
    this.filter = filterValue;
    if (filterValue === '') {
      this.dataSource = new MatTableDataSource(EMPLOYEE_DATA);
    } else if (filterValue.length < this.lastFilterLength) {
      this.dataSource = new MatTableDataSource(this.filterData(EMPLOYEE_DATA));
    } else {
      this.dataSource = new MatTableDataSource(this.filterData(this.dataSource.data));
    }
    this.updateSortAndPaginator();
    this.lastFilterLength = filterValue.length;
  }

  filterData(data: Empl[]) {
    let filteredData =
        !this.filter ? data : data.filter(obj => this.filterPredicate(obj, this.filter));

    return filteredData;
  }

  filterPredicate(data: Empl, filter: string): boolean { console.log(this.selectedColumn+"my");
    const dataStr = (data[this.selectedColumn] + '').toLowerCase();
    const transformedFilter = filter.trim().toLowerCase();

    return dataStr.indexOf(transformedFilter) != -1;
  }
}

export interface Empl {
  e_id: number;
  name: string;
  designation: string;
  salary: number;
  joining_date: Date;
}

const EMPLOYEE_DATA: Empl[] = [
  { e_id: 1, name: 'Anjana', designation: 'PA', salary: 50000, joining_date: new Date('11/2/2017') },
  { e_id: 2, name: 'Mayank', designation: 'PA', salary: 10000, joining_date: new Date('12/2/2017') },
  { e_id: 3, name: 'Tejas', designation: 'PA', salary: 200000, joining_date: new Date('10/31/2017') },
  { e_id: 4, name: 'Somya', designation: 'BA', salary: 20000, joining_date: new Date('4/14/2017') },
  { e_id: 5, name: 'Sonia', designation: 'BD', salary: 20000, joining_date: new Date('8/30/2017') },
  { e_id: 6, name: 'Sanjay', designation: 'Pa', salary: 10000, joining_date: new Date('4/24/2017') }
];