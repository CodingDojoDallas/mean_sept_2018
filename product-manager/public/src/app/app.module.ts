import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// We need to import these, and put them in the imports array below.
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';

// This is a service we created to manage http requests (get, post)
import { HttpService } from './http.service';

// Allows us to route in Angular
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductsInfoComponent } from './products/products-info/products-info.component';
import { ProductsEditComponent } from './products/products-edit/products-edit.component';
import { ProductsNewComponent } from './products/products-new/products-new.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomeComponent,
    ProductsInfoComponent,
    ProductsEditComponent,
    ProductsNewComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
