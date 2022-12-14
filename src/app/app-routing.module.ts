import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/events', pathMatch: 'full' // this will show default page
  },
  {
    path: 'events', component: EventsComponent
  },
  {
    path: 'special', component: SpecialEventsComponent,
    canActivate: [AuthGuard] // this is the protecting guard to protect this route from unoauthorized users
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
