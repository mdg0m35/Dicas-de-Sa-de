import { AdminComponent } from './componets/admin/admin.component';

import { MiniRadioComponent } from './componets/mini-radio/mini-radio.component';
import { HomeComponent } from './componets/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:"",component:HomeComponent },
  { path:"mine-Radio",component:MiniRadioComponent },
  { path:"admin",component:AdminComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
