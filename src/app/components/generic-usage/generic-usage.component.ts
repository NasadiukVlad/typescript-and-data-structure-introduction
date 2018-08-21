import { Component, OnInit } from '@angular/core';
import {MainEntity} from '../../models/main-entity.model';

@Component({
  selector: 'app-generic-usage',
  template: '<span>Generic Usage Works</span>',
})
export class GenericUsageComponent extends MainEntity<boolean> {

  private numberVariable = 100;
  private stringVariable = 'Hello, Angular';

  constructor() {
    super();
    console.log('GENERIC USAGE');
    this.logTypeOfValue(); // boolean
    this.logTypeOfParam<number>(this.numberVariable); // number
    this.logTypeOfParam<string>(this.stringVariable); // string
    this.logTypeOfParam(true); // boolean, method will work as any
  }
}

