import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsInfoComponent } from './products-info.component';

describe('ProductInfoComponent', () => {
  let component: ProductsInfoComponent;
  let fixture: ComponentFixture<ProductsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
