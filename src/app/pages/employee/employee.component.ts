import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Employee } from 'src/app/model/employee';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employee: Employee[] = require("../../../assets/employee.json");

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'phone', 'email', 'action'];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onDelete(id: number) {
    this.openConfirmDialog("Are you sure delete this data ?")
      .afterClosed().subscribe(res => {
        /**
         * Delete data in database
         */
      })
  }

  openConfirmDialog(msg: String){
    return this.dialog.open(ConfirmationDialogComponent,{
       width: '390px',
       panelClass: 'confirm-dialog-container',
       disableClose: true,
       position: { top: "10px" },
       data :{
         message : msg
       }
     });
   }
}
