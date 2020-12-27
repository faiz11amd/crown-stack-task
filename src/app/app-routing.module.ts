import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { CategoryComponent } from './components/category/category.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/guards/authGuards.service';

const routes: Routes = [
  {
    path: '', redirectTo: "home", pathMatch: "full"
  },
  // {
  //   path: '**', component: HomeComponent
  // },
  {
    path: "home", component: HomeComponent
  },
  {
    path: "category",
    component: CategoryComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "category-detail",
    component: CategoryDetailComponent,
    canActivate: [AuthGuard],

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
