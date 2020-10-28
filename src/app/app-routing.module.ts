import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { AnimalsComponent } from './animals/animals.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  {
    path: 'login',
    component : LoginComponent,
  },
  {
    path: 'home',
    component : HomeComponent,
    canActivate: [AuthService]
  },
  {
    path: 'animals',
    component : AnimalsComponent,
  },
  {
    path: 'animal-detail',
    component : AnimalDetailComponent,
  },{
    path: '**',
    redirectTo: '/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
