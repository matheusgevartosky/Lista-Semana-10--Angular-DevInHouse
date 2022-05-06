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
import { FullComponent } from './layout/full/full.component';
import { ContentComponent } from './layout/content/content.component';
import { ContentRestrictComponent } from './layout/content-restrict/content-restrict.component';

import { LoginComponent } from './Components/login/login.component';
import { RecoverPasswordComponent } from './Components/recover-password/recover-password.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    ProductsComponent,
    PricingComponent,
    AboutComponent,
    MenuComponent,
    FullComponent,
    ContentComponent,
    ContentRestrictComponent,

    LoginComponent,
     RecoverPasswordComponent
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
