import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmenusComponent } from './addmenus.component';

describe('AddmenusComponent', () => {
  let component: AddmenusComponent;
  let fixture: ComponentFixture<AddmenusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddmenusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddmenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
