import ICar from '../interface/ICar';
import IMove from '../interface/IMove';

class Car implements ICar, IMove {
  public model: string = 'GQSM-X';
  public color: string;

  constructor(color: string) {
    this.color = color;
  }

  public move(): string {
    return '出發前進！';
  }

  public getDescription(): string {
    return `型號是：${this.model}（${this.color}）`;
  }
}

// CarII 繼承了 Car
class CarII extends Car {
  static getComment(): string {
    return '我是二代車';
  }

  public getModel(): string {
    return this.model;
  }
  public getDescription(): string {
    return `${super.getDescription()}（II）`;
  }
}

const redCar = new Car('Red');
const blueCar = new Car('Blue');

console.log(redCar.getDescription());
// 型號是：GQSM-X（Red）

console.log(blueCar.getDescription());
// 型號是：GQSM-X（Blue）

// console.log(redCar.model) // 試圖取得私有屬性，會造成無法編譯

const redCarII = new CarII('Red');
console.log(redCarII.getDescription());
// 執行結果：
// 型號是：GQSM-X（Red）（II）
console.log(redCarII.getModel());
// GQSM-X
console.log(CarII.getComment());


const startMove = (car: Car): void => {
  console.log(`開始${car.move()}`);
}

startMove(redCar); // 開始出發前進！

export default Car;
