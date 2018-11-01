import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material';

import {RouterModule , Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/list/list.component';
import { EditComponent } from './components/edit/edit.component';
import { CreateComponent } from './components/create/create.component';

//Array of type 'Routes' for configuring routing
const routes : Routes=[
  { path : 'create' , component:CreateComponent },
  { path : 'edit/:id' , component:EditComponent },
  { path : 'list' , component:ListComponent },
  { path : '' , redirectTo:'list', pathMatch: 'full' },
]
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),  //Activating configuration for routes
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
