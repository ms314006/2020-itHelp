import IMove from '../interface/IMove';

class Airplane implements IMove {
  public move(): string {
    return '起飛出發！'
  }
}

export default Airplane;
