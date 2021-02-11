import { Component, HostListener, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  opened = true;
  @ViewChild('sidenav', { static: true }) sidenav!: MatSidenav;

  ngOnInit() {
    this.sidenav.fixedTopGap = 64;
    console.log(this.sidenav.fixedTopGap);
  }

  title = 'HURIS';
}
