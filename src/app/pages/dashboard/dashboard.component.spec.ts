import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // To validate the chart label on dashboard - kiya
  it('chart label should be valid', async () => {
    expect(component.barChartLabels[0]).toBe('Finance Accounting');
    expect(component.barChartLabels[1]).toBe('Human Resources');
    expect(component.barChartLabels[2]).toBe('IT Support');
    expect(component.barChartLabels[3]).toBe('Software Development');
    expect(component.barChartLabels[4]).toBe('Office Maintenance');
  });
});
