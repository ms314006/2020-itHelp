import uuid from 'uuid/v1';

// 假設購物車內容存在於 Cookie 中
const carContent = [];

const car = {

  getCurrentCar: () => carContent,

  addProdToCar: (name, count) => {
    const workCar = [...car.getCurrentCar()];
    workCar.push({ id: uuid(), name, count });
    return workCar;
  },
};

export default car;
