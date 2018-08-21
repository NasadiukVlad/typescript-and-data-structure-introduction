/* tslint:disable */
import {Component} from '@angular/core';

@Component({
  selector: 'app-inner-class-work',
  template: '<span>Inner Class Work Works</span>',
})
export class InnerClassWorkComponent {

  private classScopeVariable: any;

  constructor() {
    this.varExample();
    this.anotherVarExample(false);
    console.log(this.classScopeVariable);
    this.anotherFunction();
  }

  public varExample() {
    const a = 5;

    function innerFunction() {
      console.log(a);
    }

    innerFunction(); // 5
  }

  public anotherVarExample(isActive: boolean) {

    if (isActive) { // false
      var a = 5;
    }

    console.log(a); // undefined
  }

  /*public someFunction() {
    var a = 5;

    function innerFunction() {
      var a = 6;
      const b = 100;

      function deepInnerFunction() {
        console.log(a);
        var c = 200;
      }

      deepInnerFunction();
      console.log(c);
    }

    innerFunction();
    console.log(b);
  }*/

  public anotherFunction() {
    var a = 5;

    function innerFunction() {
      var a = 6;
      const b = 100;

      function deepInnerFunction() {
        console.log(a);
        console.log(b);
      }

      deepInnerFunction();
    }

    console.log(a);
    innerFunction();
  }

/*  private letExample(isActive) {
    let a = 5;

    if (isActive) {
      console.log(a); // 5
      let b = 10;
    }

    console.log(b); // can`t find name b
  }*/

}
