import Car from './class/Car';
import Airplane from './class/AirPlane';
import IMove from './interface/IMove';

const printParam = (param: string | number): void => console.log(param);

printParam('string');

printParam(1234);

const redCar = new Car('Red');
const airplane = new Airplane();

const startMove = (transportation: IMove): void => {
  console.log(`開始${transportation.move()}`);
}

startMove(redCar); // 開始出發前進！
startMove(airplane); // 開始飛行前進！