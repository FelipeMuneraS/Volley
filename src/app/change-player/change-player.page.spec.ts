import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePlayerPage } from './change-player.page';

describe('ChangePlayerPage', () => {
  let component: ChangePlayerPage;
  let fixture: ComponentFixture<ChangePlayerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePlayerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePlayerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
