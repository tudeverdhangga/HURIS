import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { Department } from 'src/app/model/department.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  department: Department[] = require("../../../assets/department.json");
  i: number = 0;
  label: string[] = [];
  employeeCount: number[] = [];

  constructor() { }

  ngOnInit(): void {
    this.department.forEach(element => {
      this.label[this.i] = element.name;
      this.employeeCount[this.i] = element.employeeCount;
      this.i++;
    });
  }

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = this.label;
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: this.employeeCount, label: 'Employees Count' }
  ];
}
