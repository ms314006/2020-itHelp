interface IAttackBehavior {
  attack: () => string;
}

class Cut implements IAttackBehavior {
  public attack(): string {
    return '砍劈攻擊';
  }
}

class Magic implements IAttackBehavior {
  public attack(): string {
    return '魔法攻擊';
  }
}

class Shooting implements IAttackBehavior {
  public attack(): string {
    return '射擊攻擊';
  }
}

class Person {
  public name: string;
  public attackBehavior: IAttackBehavior;

  constructor(name: string, attackBehavior: IAttackBehavior) {
    this.name = name;
    this.attackBehavior = attackBehavior;
  }

  public attack(): void {
    console.log(`${this.name}發動：${this.attackBehavior.attack()}`);
  }

  public changeAttackBehavior(attackBehavior: IAttackBehavior) {
    this.attackBehavior = attackBehavior;
  }
}

const character = new Person('神 Q 超人', new Cut());
character.attack(); // 神 Q 超人發動：砍劈攻擊

character.changeAttackBehavior(new Magic());
character.attack(); // 神 Q 超人發動：魔法攻擊

character.changeAttackBehavior(new Shooting());
character.attack(); // 神 Q 超人發動：射擊攻擊
  
