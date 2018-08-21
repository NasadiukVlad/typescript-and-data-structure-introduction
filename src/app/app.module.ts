import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataTypesComponent } from './components/data-types/data-types.component';
import { InnerClassWorkComponent } from './components/inner-class-work/inner-class-work.component';
import { ObjectOrientedProgrammingComponent } from './components/object-oriented-programming/object-oriented-programming.component';
import { DataStructuresComponent } from './components/data-structures/data-structures.component';
import { GenericUsageComponent } from './components/generic-usage/generic-usage.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTypesComponent,
    InnerClassWorkComponent,
    ObjectOrientedProgrammingComponent,
    DataStructuresComponent,
    GenericUsageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
