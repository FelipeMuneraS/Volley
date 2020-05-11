import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectServicingPage } from './select-servicing.page';

describe('SelectServicingPage', () => {
  let component: SelectServicingPage;
  let fixture: ComponentFixture<SelectServicingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectServicingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectServicingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
