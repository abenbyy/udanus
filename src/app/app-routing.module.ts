import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SlideComponent } from './components/slide/slide.component';


const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
  },
  {
    path: 'slide',
    component: SlideComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
