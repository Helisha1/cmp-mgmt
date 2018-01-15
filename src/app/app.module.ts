import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { CompensationComponent } from './compensation/compensation.component';
import { GeneratePayslipComponent } from './generate-payslip/generate-payslip.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OperationsComponent } from './operations/operations.component';
import { ReqMailComponent } from './req-mail/req-mail.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '', component: LoginComponent, pathMatch:'full' },
  { path: 'logout', component: LoginComponent },
  {
    path: 'compensation', component: CompensationComponent,
    children: [
      { path: 'payslip', component: GeneratePayslipComponent},
      { path: 'operations', component: OperationsComponent },
      { path: 'req-mail', component: ReqMailComponent }
    ]
  },

];

@NgModule({
  declarations: [
    AppComponent,
    CompensationComponent,
    GeneratePayslipComponent,
    LoginComponent,
    LogoutComponent,
    NavbarComponent,
    OperationsComponent,
    ReqMailComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
