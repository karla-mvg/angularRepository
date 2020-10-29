import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AnimalsComponent } from './animals/animals.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AnimalsComponent,
    AnimalDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
