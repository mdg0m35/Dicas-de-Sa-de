import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniRadioComponent } from './mini-radio.component';

describe('MiniRadioComponent', () => {
  let component: MiniRadioComponent;
  let fixture: ComponentFixture<MiniRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniRadioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
