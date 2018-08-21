export interface IMainEntity<T> {
  id: number;
  value: T;

  logTypeOfValue(): void;
  logTypeOfParam<T1>(value: T1): void;
}

export class MainEntity<T> implements IMainEntity<T> {
  public id: number;
  public value: T;

  public logTypeOfValue() {
    console.log(typeof this.value);
  }

  public logTypeOfParam<T1>(someParam: T1) {
    console.log(typeof someParam);
  }
}

