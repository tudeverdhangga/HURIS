import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-employee-request',
  templateUrl: './employee-request.component.html',
  styleUrls: ['./employee-request.component.css']
})
export class EmployeeRequestComponent implements OnInit {
  id!: number;
  mode!: String;
  employees: Employee[] = require("../../../../assets/employee.json");
  employee!: Employee;
  form!: FormGroup;

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
    })

    this.activatedRoute.params.subscribe(res => {
      this.id = +res.id;
      this.mode = res.mode;
      if (this.mode == "edit" || this.mode == "view")
        this.find(this.id);
    })
  }

  get f() {
    return this.form.controls;
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
