import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './Components/search/search.component';
import { HomeComponent } from './Views/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { PricingComponent } from './Components/pricing/pricing.component';
import { AboutComponent } from './Components/about/about.component';
import { MenuComponent } from './Views/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    ProductsComponent,
    PricingComponent,
    AboutComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
