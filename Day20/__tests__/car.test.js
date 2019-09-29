import uuid from 'uuid/v1';
import car from '../src/utils/car';

jest.mock('uuid/v1');

describe('Car', () => {
  beforeAll(() => {
    uuid.mockReturnValue('9999');
  });

  test('check_add_prod', () => {
    const newCar = car.addProdToCar('apple', 3);
    expect(newCar).toEqual(
      [{ id: '9999', name: 'apple', count: 3 }],
    );
  });
});
