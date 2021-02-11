import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {    
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'HURIS'`, () => {
    expect(app.title).toEqual('HURIS');
  });

  /**
   * Unit Test for sidenav fixedTopGap
   * value equal 64
   */
  it('sidenav to navbar gap should be 64', () => {
    expect(app.sidenav.fixedTopGap).toEqual(64);
  })
});
