import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SidenavComponent } from './sidenav.component';

describe('SidenavComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        SidenavComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SidenavComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'HURIS'`, () => {
    const fixture = TestBed.createComponent(SidenavComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('HURIS');
  });
});
