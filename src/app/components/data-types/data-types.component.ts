/* tslint:disable */
import {Component, OnInit} from '@angular/core';
import {Color} from '../../enums/color.enum';
import {MenuTab} from '../../enums/menu-tab.enum';

@Component({
  selector: 'app-data-types',
  template: '<span>Data Types Works</span>',
})
export class DataTypesComponent {

  /* boolean type definitions*/
  public isTypeDefined: boolean = true; // true, type definition is redundant
  public isDefaultBooleanTrue = true; // true, the correct one
  public isDefaultValueDefined: boolean; // false, the correct one
  public isBooleanDefinitionPresent = false; // false, better set the type

  /* number type definitions*/
  public numberVariable = 7; // the correct one
  public secondNumberVariable: number = 7; // type definition is redundant
  public floatNumber = 9.34234; // the correct one
  public secondFloatNumber: number = 9.34234; // type definition is redundant

  /* string type definitions*/
  public stringSingleQuote = 'Hello, Typescript!'; // the correct one
  public customStringDoubleQuote = 'Hello, Typescript';
  public stringSingleQuoteAndType: string = 'Hello, Typescript!';

  public stringDoubleQuote = 'Hello, Typescript!';
  public stringDoubleQuoteAndType: string = 'Hello, Typescript!';

  public customString: string; // the correct one

  /* array type definition*/
  public numberArray = [1, 2, 3, 4, 5]; //the correct one
  public stringArray = ['1', '2', '3', '4', '5']; //the correct one
  public emptyArray: number[]; //the correct one

  public stringArrayType: string[] = ['1', '2', '3', '4', '5'];
  public arrayType: Array<string> = ['1', '2', '3', '4', '5'];
  public arrayTypeLong: Array<string> = new Array('1', '2', '3', '4', '5');
  public constructorArrayType = new Array(1, 2, 3);

  /* tuple type definition*/
  public tupleVariable = [1, '2', true];
  public tupleVariableType: [string, number, boolean]
    = ['1', 3, true]; // correct order is important, 3 max length here!

  public colors = Color;

  public menuTab = MenuTab;
  protected someProtectedVariable;
  private anyVariable: any;
  private anyVariableObject: Object;

  private stringLengthCounter: number;
  private numberLengthCounter: number;
  private unknownVariable: unknown;

  private readonly I_AM_CONSTANT = 'Constant by Default';
  private readonly I_AM_ALMOST_CONSTANT;

  constructor() {
    this.I_AM_ALMOST_CONSTANT = 'Now i am constant';

    this.countNumberLength();
    this.countStringLength();

    console.log(this.isTypeDefined);
    console.log(this.isDefaultBooleanTrue);
    console.log(this.isDefaultValueDefined);
    console.log(this.isBooleanDefinitionPresent);

    console.log(this.numberVariable);
    console.log(this.secondNumberVariable);
    console.log(this.floatNumber);
    console.log(this.secondFloatNumber);

    console.log(this.stringSingleQuote);
    console.log(this.customStringDoubleQuote);
    console.log(this.stringSingleQuoteAndType);
    console.log(this.stringDoubleQuote);
    console.log(this.stringDoubleQuoteAndType);
    console.log(this.customString);

    console.log(this.numberArray);
    console.log(this.stringArray);
    console.log(this.emptyArray);
    console.log(this.stringArrayType);
    console.log(this.arrayType);
    console.log(this.arrayTypeLong);
    console.log(this.constructorArrayType);
  }

  public useEnumInTypescript() {
    // your any magnificent code here
    console.log(Color.Yellow);
  }

  public printValueToConsole(value): void {
    console.log(value);
  }

  private useAny() {
    this.anyVariable.unexistingMethod();
  }

  private useAnyObject() {
   // this.anyVariableObject.unexistingMethod();
  }

  private getSomeString(): any {
    return 'Some string';
  }

  private getSomeNumber(): any {
    return 1234567;
  }

  private countStringLength() {
    this.stringLengthCounter = this.getSomeString().length;
    console.log('this.stringLengthCounter: ', this.stringLengthCounter);
  }

  private countNumberLength() {
    this.numberLengthCounter = (this.getSomeNumber() as string).length;
    console.log('this.numberLengthCounter: ', this.numberLengthCounter);
  }

  private useUnknownVariable(): void {
    if(this.unknownVariable instanceof Array) {
      this.unknownVariable.push(5);
    }

   //  this.unknownVariable.push(5);

    (this.unknownVariable as Array<number>).push(5);
  }
}
