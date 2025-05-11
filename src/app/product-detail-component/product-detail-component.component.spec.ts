import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailComponentComponent } from './product-detail-component.component';

describe('ProductDetailComponentComponent', () => {
  let component: ProductDetailComponentComponent;
  let fixture: ComponentFixture<ProductDetailComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
