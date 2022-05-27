import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeContainerComponent } from "./home-container/home-container.component";


const routes = [
    {
      path: '', component: HomeContainerComponent
    }
  ]
  
  @NgModule({
    declarations: [],
    imports: [
      CommonModule,
      RouterModule.forChild(routes)
    ]
  })
  export class HomeRoutingModule { }
  