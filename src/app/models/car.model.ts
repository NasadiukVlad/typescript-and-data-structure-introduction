import {CarType} from '../enums/car-type.enum';
import {FuelType} from '../enums/fuel-type.enum';
import {CarBrand} from '../enums/car-brand.enum';
import {MercedesColor} from '../enums/mercedes-color.enum';
import {BMWColor} from '../enums/bmw-color.enum';

export interface ICar {
  brand: CarBrand;
  fuelType?: FuelType;
  type: CarType;
  maxSpeed: number;
  price: number;
  color: MercedesColor | BMWColor;

  getMaxSpeed(): number;

  informAboutCarBrand(): string;
}

export abstract class Car implements ICar {
  public brand: CarBrand;
  public fuelType?: FuelType;
  public maxSpeed: number;
  public price: number;
  public type: CarType;
  public color: any;

  constructor(brand: CarBrand, maxSpeed: number, price: number, color: MercedesColor | BMWColor,
              fuelType: FuelType = FuelType.Petrol, type?: CarType) {
    this.brand = brand;
    this.fuelType = fuelType;
    this.maxSpeed = maxSpeed;
    this.price = price;
    this.type = type;
    this.color = color;
  }

  public abstract testCarElectricSystem(): any;

  public informAboutCarBrand(): string {
    return `Current car brand is: ${this.brand}`;
  }

  public getMaxSpeed(): number {
    return this.maxSpeed;
  }

  public methodNotFromInterface(): string {
    return 'Learning Angular';
  }
}


