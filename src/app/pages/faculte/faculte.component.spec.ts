import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaculteComponent } from './faculte.component';

describe('FaculteComponent', () => {
  let component: FaculteComponent;
  let fixture: ComponentFixture<FaculteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaculteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaculteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
