import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertRotationPage } from './insert-rotation.page';

describe('InsertRotationPage', () => {
  let component: InsertRotationPage;
  let fixture: ComponentFixture<InsertRotationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertRotationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertRotationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
