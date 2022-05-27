import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ListContainerComponent } from "./components/list-container/list-container.component";

//Specifico nel routing quale componente visualizzare all'ingresso nella Route
const routes = [
    {
      path: '', component: ListContainerComponent
  }
  ]
  
  @NgModule({
    declarations: [],
    imports: [
      CommonModule,
      RouterModule.forChild(routes)
    ]
  })
  export class ListRoutingModule { }
  