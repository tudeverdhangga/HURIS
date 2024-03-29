import { Component, OnInit } from '@angular/core';
import { NgDialogAnimationService } from 'ng-dialog-animation';
import { Employee } from 'src/app/model/employee.model';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  showDialog = false;

  employee: Employee[] = require("../../../assets/employee.json");

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'phone', 'email', 'action'];

  constructor(public dialog: NgDialogAnimationService) {}
  
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
       },
      //  Rotate Animation
      //  animation: {
      //   incomingOptions: {
      //     keyframes: [
      //       { transform: "rotate(360deg)" },
      //       { transform: "rotate(0)" }
      //     ],
      //     keyframeAnimationOptions: { easing: "ease-in-out", duration: 500 }
      //   },
      //   outgoingOptions: {
      //     keyframes: [
      //       { transform: "rotate(0)" },
      //       { transform: "rotate(360deg)" }
      //     ],
      //     keyframeAnimationOptions: { easing: "ease-in-out", duration: 500 }
      //   }
      // },
      animation:{to:"aside"}
     });
   }
}
