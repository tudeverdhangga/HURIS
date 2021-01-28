import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  
  employee: Employee[] = [
    {
      "id": 1,
      "firstName": "Krish",
      "lastName": "Lee",
      "phone": "123456",
      "email": "krish.lee@learningcontainer.com"
    },
    {
      "id": 2,
      "firstName": "racks",
      "lastName": "jacson",
      "phone": "123456",
      "email": "racks.jacson@learningcontainer.com"
    },
    {
      "id": 3,
      "firstName": "denial",
      "lastName": "roast",
      "phone": "33333333",
      "email": "denial.roast@learningcontainer.com"
    },
    {
      "id": 4,
      "firstName": "devid",
      "lastName": "neo",
      "phone": "222222222",
      "email": "devid.neo@learningcontainer.com"
    },
    {
      "id": 5,
      "firstName": "jone",
      "lastName": "mac",
      "phone": "111111111",
      "email": "jone.mac@learningcontainer.com"
    }
  ];

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'phone', 'email', 'action'];
  
  constructor() { }

  ngOnInit(): void {
  }
  
}
