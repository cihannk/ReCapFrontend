import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandsComponent } from './components/brands/brands.component';
import { CarsComponent } from './components/cars/cars.component';
import { ColorsComponent } from './components/colors/colors.component';
import { CustomersComponent } from './components/customers/customers.component';
import { DetailComponent } from './components/detail/detail.component';
import { RentalsComponent } from './components/rentals/rentals.component';

const routes: Routes = [
{path: "", component: CarsComponent},
{path: "brands", component: BrandsComponent},
{path: "cars", component: CarsComponent},
{path: "colors", component: ColorsComponent},
{path: "customers", component: CustomersComponent},
{path: "rentals", component: RentalsComponent},
{path: "cars/color/:colorId", component: CarsComponent},
{path: "cars/brand/:brandId", component: CarsComponent},
{path: "cars/detail/:carId", component: DetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
