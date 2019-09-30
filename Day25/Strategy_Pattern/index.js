var Cut = /** @class */ (function () {
    function Cut() {
    }
    Cut.prototype.attack = function () {
        return '砍劈攻擊';
    };
    return Cut;
}());
var Magic = /** @class */ (function () {
    function Magic() {
    }
    Magic.prototype.attack = function () {
        return '魔法攻擊';
    };
    return Magic;
}());
var Shooting = /** @class */ (function () {
    function Shooting() {
    }
    Shooting.prototype.attack = function () {
        return '射擊攻擊';
    };
    return Shooting;
}());
var Person = /** @class */ (function () {
    function Person(name, attackBehavior) {
        this.name = name;
        this.attackBehavior = attackBehavior;
    }
    Person.prototype.attack = function () {
        console.log(this.name + "\u767C\u52D5\uFF1A" + this.attackBehavior.attack());
    };
    Person.prototype.changeAttackBehavior = function (attackBehavior) {
        this.attackBehavior = attackBehavior;
    };
    return Person;
}());
var character = new Person('神 Q 超人', new Cut());
character.attack(); // 神 Q 超人發動：砍劈攻擊
character.changeAttackBehavior(new Magic());
character.attack(); // 神 Q 超人發動：魔法攻擊
character.changeAttackBehavior(new Shooting());
character.attack(); // 神 Q 超人發動：射擊攻擊
