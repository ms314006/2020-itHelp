import uuid from 'uuid/v1';

const car = {
  carContent: [],

  getCurrentCar: () => car.carContent,

  addProdToCar: (name, count) => {
    const workCar = [...car.getCurrentCar()];
    workCar.push({ id: uuid(), name, count });
    return workCar;
  },
};

export default car;
