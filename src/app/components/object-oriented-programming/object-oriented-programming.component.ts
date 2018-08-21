import {Component} from '@angular/core';
import {MercedesBenz} from '../../models/mercedes-benz.model';
import {MercedesColor} from '../../enums/mercedes-color.enum';
import {FuelType} from '../../enums/fuel-type.enum';
import {CarType} from '../../enums/car-type.enum';

@Component({
  selector: 'app-object-oriented-programming',
  template: '<span>App Object Oriented Programming</span>',
})
export class ObjectOrientedProgrammingComponent {

  private mercedesBenz500E = new MercedesBenz(
    320,
    100,
    MercedesColor.BlackOnyx,
    FuelType.Petrol, CarType.Coupe,
    2018,
    'LED INSIDE',
    false);

  private mercedesBenz500EVip: MercedesBenz;

  constructor() {
    this.mercedesBenz500E.informAboutCarBrand();
    this.mercedesBenz500E.getReleaseDate();

    this.mercedesBenz500EVip = new MercedesBenz(
      400,
      200,
      MercedesColor.DeepGreen,
      FuelType.StorageBattery, CarType.Sedan,
      2019,
      'Twin Turbo',
      true);
    this.mercedesBenz500E.informAboutCarBrand();
    this.mercedesBenz500EVip.getReleaseDate();
  }
}
