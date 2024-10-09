import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterOutlet } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  // <-- Import this
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { Route } from '@angular/router';
import { UserManagementComponent } from './Admin/user-management/user-management.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { AdminNavigationComponent } from './Admin/admin-navigation/admin-navigation.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserManagementComponent,
    AdminDashboardComponent,
    AdminNavigationComponent,
  
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    BrowserAnimationsModule,  // <-- Add this line
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
