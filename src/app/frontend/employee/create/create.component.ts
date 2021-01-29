import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  showMsg: boolean = false;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    /**
     * Save data in database
     */
    this.redirectBack();
  } 

  redirectBack() {
    this.router.navigateByUrl('employee');
    this.showMsg = true;
  }

}
