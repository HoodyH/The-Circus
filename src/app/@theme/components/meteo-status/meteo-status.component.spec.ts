import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoStatusComponent } from './meteo-status.component';

describe('MeteoStatusComponent', () => {
  let component: MeteoStatusComponent;
  let fixture: ComponentFixture<MeteoStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeteoStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeteoStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
