import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutOfPage } from './about-of.page';

describe('AboutOfPage', () => {
  let component: AboutOfPage;
  let fixture: ComponentFixture<AboutOfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutOfPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutOfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
