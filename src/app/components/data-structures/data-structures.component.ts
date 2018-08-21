import {Component} from '@angular/core';
import {CarBrand} from '../../enums/car-brand.enum';

@Component({
  selector: 'app-data-structures',
  template: '<span>Data structure works</span>',
})
export class DataStructuresComponent {

  private variable; // type: undefined

  constructor() {
    this.switchCaseSample(CarBrand.Mercedes);
  }

  private variableTypeTest(localVar) { // localVar type: undefined
    console.log(typeof localVar);
  }

  private elseAndIfStatement(condtition: boolean) {
    if (condtition) {
      // logic if condition is true
    } else {
      // logic if condition is false
    }

    if (!condtition) {                // if condition is false, stop checking, else continue
      // logic
    } else if (condtition === null) { // if condition is null, stop checking, else continue
      // logic
      // actually useless sample
      // this statement have to ve handled by 1st block
    } else {                         // if no one statement match
      // logic
    }

    (condtition ? console.log(true) : console.log(false)); // ternary operator
  }

  private loopSamples() {
    const array = [1, 2, 3, 4, 5];

    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }

    for (let arrayElement of array) {
      console.log(arrayElement);
    }

    array.forEach((element: number) => {
      console.log(element);
    });
  }

  private switchCaseSample(carBrand: CarBrand) {
    switch (carBrand) {
      case CarBrand.BMW:
        console.log('This is BMW!');
        break;
      case CarBrand.Mercedes: // match here
        console.log('This is Mercedes!');
        break;
      case CarBrand.Mazda:
        console.log('This is Mazda!');
        break;
      default:
        console.log('Unknown brand!');
        break;
    }
  }

  private whileTrueSample() {
    let i = 0;

    while (i < 10) {
      console.log(i);
      i++;
    }

    while (true) {
      // will run forever
    }
  }

  private doWhileSample() {
    let a = 0;
    do { // loop will run for 10 times
      console.log(a);
      a++;
    } while (a < 10);

    let b = 0;

    do { // loop will run forever
      console.log(b);
    } while (b < 10);

    let c = 10;

    do { // loop will run 1 time
      console.log(c);
      c++;
    } while (c < 10);
  }

}
