import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.modules';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeContainerComponent } from './home-container/home-container.component';
import { HomeDetailComponent } from './components/home-detail/home-detail.component';



@NgModule({
  declarations: [
  
   
  
    HomeContainerComponent,
              HomeDetailComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
   
  ], 
  exports:[
   HomeContainerComponent
  ]
})
export class HomeModule { }
