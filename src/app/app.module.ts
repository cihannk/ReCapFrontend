import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { CarsComponent } from './components/cars/cars.component';
import { ColorsComponent } from './components/colors/colors.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CustomersComponent } from './components/customers/customers.component';
import { RentalsComponent } from './components/rentals/rentals.component';
import { CategoryComponent } from './components/category/category.component';
import { ListcontainerComponent } from './components/listcontainer/listcontainer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    CarsComponent,
    ColorsComponent,
    BrandsComponent,
    CustomersComponent,
    RentalsComponent,
    CategoryComponent,
    ListcontainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: "brands", component: BrandsComponent},
      {path: "cars", component: CarsComponent},
      {path: "colors", component: ColorsComponent},
      {path: "customers", component: CustomersComponent},
      {path: "rentals", component: RentalsComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
