import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Color2HexComponent } from './color2-hex.component';

describe('Color2HexComponent', () => {
  let component: Color2HexComponent;
  let fixture: ComponentFixture<Color2HexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Color2HexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Color2HexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
