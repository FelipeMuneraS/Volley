import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeLiberoPage } from './change-libero.page';

describe('ChangeLiberoPage', () => {
  let component: ChangeLiberoPage;
  let fixture: ComponentFixture<ChangeLiberoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeLiberoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeLiberoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
