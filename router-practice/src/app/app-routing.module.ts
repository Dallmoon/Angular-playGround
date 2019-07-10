import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index.component';
import { ServiceComponent } from './components/service.component';
import { AboutComponent } from './components/about.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
