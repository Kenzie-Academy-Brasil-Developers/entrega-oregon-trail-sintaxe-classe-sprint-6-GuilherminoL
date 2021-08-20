class Traveler{
    constructor(name){
        this._name = name;
        this._food = 1;
        this._isHealthy = true ;
    }

    hunt(){
        this.food += 2;
    }

    eat(){
        if (this.food > 0) {
            this.food--;
        }
        else{
            this.isHealthy = false;
        }
    }
    get food(){
        return this._food
    }
    set food(value){
        this._food = value
    }
    get name(){
        return this._name
    }
    set name(value){
        this._name = value
    }
    get isHealthy(){
        return this._isHealthy
    }
    set isHealthy(value){
        this._isHealthy = value
    }
}

class Wagon {
    constructor(capacity){
        this.capacity = capacity;
        this.passengers = []
    }
    getAvailableSeatCount(){
        let availableSeat = this.capacity - this.passengers.length 
        return availableSeat
    }
    join(passenger){
        if (this.capacity > this.passengers.length){
            this.passengers.push(passenger)
        }
    }
    shouldQuarantine(){
        let output = false
        this.passengers.map((person)=>{
            if (person.isHealthy === false){
                output = true
            }
        })
        return output
    }
    totalFood(){
        let total = 0
        this.passengers.map((person)=>{
            total += person.food
        })
        return total
    }
}

// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');

console.log(`${wagon.getAvailableSeatCount()} should be 2`);

wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);

wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);

henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)

console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);