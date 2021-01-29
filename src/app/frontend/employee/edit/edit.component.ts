import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

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
  
  onSubmit() {
    /**
     * Save data in database
     */
    this.redirectBack();
  } 

  redirectBack() {
    this.router.navigateByUrl('employee');
  }
}
