class Family{

    static budget = 100;
    pocketMoney = 25;

}

let father = new Family();
let mother = new Family();

console.log(Family.budget);
father.pocketMoney = 50;
console.log(father.pocketMoney);
console.log(mother.pocketMoney);
//console.log(father.Family.budget);
