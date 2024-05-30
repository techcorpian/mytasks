// 3. Person

class Person {
    constructor(name = '', age, height, skill ='', batStyle='', bowlStyle='', nationality='', basePrice){
        this.name = name;
        this.age = age;
        this.height = height + 'ft';
        this.skill = skill;
        this.batStyle = batStyle + ' batsman';
        this.bowlStyle = bowlStyle + ' bowler';
        this.nationality = nationality;
        this.basePrice = basePrice + 'Cr';
    }

}

const virat = new Person('Virat Kohli', 27, 5.8, 'Batsman','Right-handed','Right-arm spin','India',12.5);
const devilliers = new Person('AB De villiers', 32, 5.9, 'Batsman','Right-handed','Right-arm spin','South Africa',9);
const starc = new Person('Mitchael Starc', 30, 6.2, 'Bowler','Right-handed','Left-arm fast','Australia',10.5);

console.log(starc);