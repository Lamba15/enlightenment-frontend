import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulOrderCheckoutItemComponent } from './successful-order-checkout-item.component';

describe('SuccessfulOrderCheckoutItemComponent', () => {
  let component: SuccessfulOrderCheckoutItemComponent;
  let fixture: ComponentFixture<SuccessfulOrderCheckoutItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessfulOrderCheckoutItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessfulOrderCheckoutItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
