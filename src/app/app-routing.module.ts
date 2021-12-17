import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JewelrAccessoriesComponent} from './components/jewelr-accessories/jewelr-accessories.component';
import {ClothingShoesComponent } from './components/clothing-shoes/clothing-shoes.component';
import { HomeLivingComponent } from './components/home-living/home-living.component';
import { WeddingPartyComponent } from './components/wedding-party/wedding-party.component';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';

const routes: Routes = [
  {path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:'Home' ,component:HomeComponent},
/*   {path:'Home/:id' ,component:HomeComponent},
 */  {path:'Jewelry&Accessories',component:JewelrAccessoriesComponent},
{path:'Clothing&Shoes',component:ClothingShoesComponent },
{path:'Home&Living',component:HomeLivingComponent },
{path:'Wedding&Party',component:WeddingPartyComponent },
{path:'Cart',component:CardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
