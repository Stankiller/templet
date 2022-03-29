import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ContentComponent } from './content/content.component';
import { NoDataFoundComponent } from './no-data-found/no-data-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './product-detail/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContentComponent,
    NoDataFoundComponent,
    ProductDetailComponent,
    CartComponent,
    LoginComponent,
    SignupComponent,
    DialogComponent
  ],
  entryComponents: [
    DialogComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatTableModule,
    MatDialogModule,
    RouterModule.forRoot([
      {path : '', component : ContentComponent },
      {path : 'productDetail/:id', component : ProductDetailComponent },
      {path : 'cart', component : CartComponent },
      {path : 'login', component : LoginComponent },
      {path : 'signup', component : SignupComponent },
      {path : '**', component : NoDataFoundComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
