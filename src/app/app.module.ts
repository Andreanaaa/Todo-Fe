import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './features/home/home.module';
import { ListContainerComponent } from './features/list/components/list-container.component';
import { ListContainerComponent } from './features/list/components/list-container/list-container.component';
import { ListFormComponent } from './features/list/components/list-form/list-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ListContainerComponent,
    ListFormComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
