import { SearchComponent } from './Components/search/search.component';
import { AboutComponent } from './Components/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Views/home/home.component';
import { PricingComponent } from './Components/pricing/pricing.component';
import { ProductsComponent } from './Components/products/products.component';

const routes: Routes = [
  { path: '', component: HomeComponent , pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'pricing', component:PricingComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'search', component: SearchComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
