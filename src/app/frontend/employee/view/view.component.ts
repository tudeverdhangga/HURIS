import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  id!: number;
  employees: Employee[] = require("../../../model/employee.json");
  employee!: Employee;

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(res => {
      this.id = +res.id;
      this.find(this.id);
    })
  }

  find(id: number) {
    this.employees.forEach(element => {
      if (element.id == id)
        this.employee = element;
    });
  }

  redirectBack() {
    this.router.navigateByUrl('employee');
  }
}
