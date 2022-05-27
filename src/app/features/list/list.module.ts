import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ListContainerComponent } from "./components/list-container/list-container.component";
import { ListFormComponent } from "./components/list-form/list-form.component";
import { ListRoutingModule } from "./list-routing.module";

@NgModule({
    declarations: [
      ListContainerComponent,
      ListFormComponent
    ],
    imports: [
      CommonModule, ListRoutingModule, FormsModule
    ],
    exports: [
      ListContainerComponent
    ]
  })
  export class ListModule { }
  