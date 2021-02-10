import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { EmployeeRequestComponent } from './employee-request.component';

describe('EmployeeRequestComponent', () => {
  let component: EmployeeRequestComponent;
  let fixture: ComponentFixture<EmployeeRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ EmployeeRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be valid', async () => {
    component.form.controls['first_name'].setValue('Tude');
    component.form.controls['last_name'].setValue('Verdhangga');
    component.form.controls['phone'].setValue('081999528039');
    component.form.controls['email'].setValue('tudeverdhangga@gmail.com');
    expect(component.form.valid).toBeTruthy();
  })
});
