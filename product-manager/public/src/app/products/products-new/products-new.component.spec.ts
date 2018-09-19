import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsNewComponent } from './products-new.component';

describe('ProductsNewComponent', () => {
  let component: ProductsNewComponent;
  let fixture: ComponentFixture<ProductsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
