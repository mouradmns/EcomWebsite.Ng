import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectclcComponent } from './selectclc.component';

describe('SelectclcComponent', () => {
  let component: SelectclcComponent;
  let fixture: ComponentFixture<SelectclcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectclcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectclcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
