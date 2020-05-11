import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertPlayersPage } from './insert-players.page';

describe('InsertPlayersPage', () => {
  let component: InsertPlayersPage;
  let fixture: ComponentFixture<InsertPlayersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertPlayersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertPlayersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
