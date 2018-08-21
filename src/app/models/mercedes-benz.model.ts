import {MercedesColor} from '../enums/mercedes-color.enum';
import {FuelType} from '../enums/fuel-type.enum';
import {CarType} from '../enums/car-type.enum';
import {CarBrand} from '../enums/car-brand.enum';
import {Car} from './car.model';

export class MercedesBenz extends Car {
  public releaseDate: number;
  public individualMercedesDetaild: any;
  public isFourMaticPresent: boolean;

  constructor(maxSpeed: number, price: number,
              color: MercedesColor, fuelType: FuelType,
              type: CarType, releaseDate: number, individualMercedesDetaild: any,
              isFourMaticPresent: boolean,
              brand = CarBrand.Mercedes
  ) {
    super(brand, maxSpeed, price, color, fuelType, type);
    this.releaseDate = releaseDate;
    this.individualMercedesDetaild = individualMercedesDetaild;
    this.isFourMaticPresent = isFourMaticPresent;
  }

  public getReleaseDate(): string {
    return `Current release day is ${this.releaseDate}`;
  }

  public testCarElectricSystem(): any {
    // your implementation
  }
}

