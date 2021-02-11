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
  });

  //Unit test for title form
  it('should return title for form', () => {
    switch (component.mode) {
      case "create":
        expect(component.title).toEqual("Create Employee");
        break;
        case "edit":
        expect(component.title).toEqual("Edit Employee");
        break;
        case "view":
        expect(component.title).toEqual("View Employee");
        break;
        default:
        expect(component.title).toEqual("Wrong Page");
        break;
    }
  });

  // Unit test for status isViewOnly
  it('mode should view', () => {
    if (component.mode == "view") {
      expect(component.isViewOnly).toEqual(true);
    } else {
      expect(component.isViewOnly).toEqual(false);
    }
  });
});
