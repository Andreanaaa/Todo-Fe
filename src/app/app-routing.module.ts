import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

{
   path:'', redirectTo:'/home', pathMatch:'full'

},

  {
    path: 'home', loadChildren: () => import('./features/home/home.module')
      .then(m => m.HomeModule)
  },

  {
    path: 'create', loadChildren:() => import('./features/list/list.module')
  }

];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
