
/*

typescript is basically, set the type of variables, and type of variables returned on the function, 
and other features/methodologies:

 - types (variables, passed arguments in function and return of functions),
 - custom types (type aliases), 
 - intersection types
 - optional types
 - literal types
 - Enums, 
 - tuples,
 - interfaces, 
 - generics, 

*/

/**
 * 
 *  javascript types : string, number, boolean, array, null, undefined, object, symbol, (bigInt - novo)
 * 
 *  object data types : Object, Array, Date
 */


const person: {firstName: string, lastName: string, age: number} = {
    firstName: 'Pedro',
    lastName: 'Mariano',
    age: 30
}
console.log(person)


//Age como propriedade opcional
const person2: {firstName: string, lastName: string, age?: number} = {
    firstName: 'Pedro',
    lastName: 'Mariano',
}
console.log(person)

//Como funcao
function printUser(): {firstName: string, lastName: string, age: number}  {
    return {
        firstName: 'Pedro',
        lastName: 'Mariano',
        age: 30
    }
}
const res = printUser()
console.log(res)

// -------------------------------------------
// -- Type aliases (custom types)

type User = {
    name: string;
    age:number;
    location:string; 
}

const printUserInfo = (user: User) => {
    return `Name: ${user.name}, and age: ${user.age}, and location: ${user.location}`;
}

const res2 = printUserInfo({name: "Lala", age: 20, location: "Brasil"})
console.log(res2)



// --------------------------------------------
// -- intersection or combined types
type person2 = {
    name: string;
    age: number
}

type employee = {
    company: string
}

type worker = person2 & employee

const alguem:  person2 = {name: "vitoria", age: 22}
const alguemEmpregado = {name: "Vitoria", age: 30, company: "Meta"}

console.log(alguem)
console.log(alguemEmpregado)



// --------------------------------------------
// -- Unions - accepts multiple types

let password : string | number = 20;
password = 'vinte'

console.log(password)



// --------------------------------------------
// -- Literal types ---
// seleciona os possiveis valores que podem ser inicializados na variavel

let color: 'red' | 'purple' | 'pink'

color = 'red'
//color = 'yellow'

console.log(color)



// --------------------------------------------
// -- Tuples (like in Python) ---
// 

let myTuple: [string, number] = ["hello", 42]
console.log(myTuple)



// --------------------------------------------
// -- ENUMS ---
// valores como possiveis constantes da variavel, util para definir valores pre-definidos.

enum WeatherCondition {
    Sunny = 'sunny',
    Cloud = 'cloudy',
    Rainy = 'rainy',
    Skowy = 'sknowy'
}
console.log(`The weather is ${WeatherCondition.Sunny}`)



// --------------------------------------------
// -- OOP ---
// Como usar ts em OO
// modifiers - public / private / protected
// public - pode ser acessado de qualquer lugar
// private - so pode ser acessado por dentro da propria classe
// protected - acessado pela propria classe, e suas subclasses

class Human {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

const human =  new Human("Ze pica", 40)
console.log(human)


class Animal {
    public specie: string
    private age: number // só pode ser usado dentro da classe Animal
    protected color: string // pode ser usada na classe Animal e na Gato

    constructor(specie : string, age: number, color: string){
        this.specie = specie
        this.age = age
        this.color = color
    }

    getIntroduction(): string {
        return `the ${this.specie} with ${this.age} and ${this.color}`
    }


}

const animal = new Animal("passado", 3, "black")
console.log(animal.getIntroduction());

class Gato extends Animal {
    sound: string

    constructor(specie: string, age: number, color: string, sound: string){
        super(specie, age, color)
        this.sound = sound
    }

    //this.age is not acessible because it is private in the main class
    getIntroduction(): string {
        //return `the ${this.specie} with ${this.age} and ${this.color}, and make sound like ${this.sound}`
        return `the ${this.specie} and ${this.color}, and make sound like ${this.sound}`
    }
}

const gato = new Gato("felino", 5, "white", "meow")
console.log(gato.getIntroduction())


// --------------------------------------------
// -- OOP ---
// Get and setters - como obter e alterar valores das propriedades

class MyClass {
    private _myProperty: number = 0

    get myProperty(): number {
        return this._myProperty
    }

    set myProperty(value: number) {
        this._myProperty = value
    }
}

const myClass = new MyClass()
console.log(`Current value ${myClass.myProperty}`)

myClass.myProperty = 10
console.log(`Current value after update: ${myClass.myProperty}`)


// --------------------------------------------
// -- Interface ---
// Define a contract (shape) of an object, to make sure the structure of the object is correct
// It can be used to shape/define functions and classes too


//Object contract
interface Carro {
    montadora: string;
    modelo: string;
    ano: number;
}

const fusca: Carro = {
    montadora: 'Wolks',
    modelo: 'fuscão',
    ano: 1972
}



//function contract
interface Calc {
    (a:number, b:number): number
}

const add: Calc = (a, b) => a+b

const subtract: Calc = (a, b) => a-b

console.log(add(10,6))
console.log(subtract(50,20))



//Class contract
interface Vehicle {
    start(): void;
    stop(): void;
}

class Car implements Vehicle {
    start(){
        console.log("car is on")
    }
    stop(){
        console.log("car is off")
    }
}

const myCar = new Car()
myCar.start()
myCar.stop()


//Declaration merging - 2 ou mais interfaces se complementam
interface Bike {
    brand: string;
    start(): void;
}

interface Bike {
    model: string;
    stop(): void;
}

const myBike: Bike = {
    brand: "Honda",
    model: "nc750",
    start() {
        console.log("Bike started")
    },
    stop(){
        console.log("Bike stopped")
    }
}

console.log(myBike.start())
console.log(myBike.model)
console.log(myBike.stop())


// --------------------------------------------
// -- Generics ---
// Create reusable components that can work with variety of types.
// it can define a generic that can be applied to functions, classes and interfaces

/*

    function printNumber(item: number, defaultValue: number): [number, number]{
        return [item, defaultValue]
    }
    function printString(item: string, defaultValue: string): [string, string]{
        return [item, defaultValue]
    }
    function printBoolean(item: boolean, defaultValue: boolean): [boolean, boolean]{
        return [item, defaultValue]
    }

    const num = printNumber(12, 20)
    console.log(num)

    const str = printString('twelve', 'twenty')
    console.log(str)

    const bool = printBoolean(true, true)
    console.log(bool)

*/

function uniqueDataTypesFunc<T>(item: T, defaultValue: T): [ T, T]{
    return [item, defaultValue]
}

const result = uniqueDataTypesFunc<number>(12, 12)
console.log(result)

const result2 = uniqueDataTypesFunc<string>('twelve', 'ten')
console.log(result2)

const result3 = uniqueDataTypesFunc<boolean>(true, false)
console.log(result3)




//It is still using uniqueDataTypesFunc above
interface Dog {
    name: String;
    breed: String;
}
const dog1 = uniqueDataTypesFunc<Dog>(
    { name: 'Buddy', breed: 'Labrador'},
    { name: 'Teddy', breed: 'American Bully'}
)

console.log(dog1)



function getRandomKeyValuePair<T>(obj: {[key: string]: T}) : {key: string; value: T}{
    
    const keys = Object.keys(obj)
    const randKey = keys[Math.floor(Math.random() * keys.length)]

    return {key: randKey, value: obj[randKey]};
}

const stringObject = {a: 'apple', b: 'banana', c: 'cherry'}
const resKey = getRandomKeyValuePair<string>(stringObject)
console.log(resKey)


const NumberObject = { one: 1, two: 2, three: 3}
const randomNumberPair = getRandomKeyValuePair<number>(NumberObject)
console.log(randomNumberPair)


//----

function filterArray<T>(array:T[], condition: (item: T) => boolean): T[] {
    return array.filter((item) => condition(item))
}

const numberArray = [1,2,3,4,5,6,7,8,9,10]
const evenNumbers = filterArray<number>(numberArray, (num) => num % 2 === 0)
console.log(evenNumbers)


const stringArr = ["apple", "banana", 'cherry', 'date']
const shortWords = filterArray<string>(stringArr, (word) => word.length < 6)
console.log(shortWords) 


//---------
interface Fruit {
    name: string;
    color: string
}

const fruitArray: Fruit[] = [{name: "apple", color:  "red"}, {name: "banana", color:  "yellow"}, {name: "cherry", color:  "red"}]

const redFruits = filterArray<Fruit>(fruitArray, (fruit) => fruit.color === 'red')
console.log(redFruits)



//--- Multiple type generics

function reversePair<T, U>(value1: T, value2: U): [U, T]{
    return [value2, value1] 
}

const reversePairConst = reversePair("hello", 20)
console.log(reversePairConst)


// Metodos ágeis e Scrum - SCRUM Master
// Engenharia de requisitos - Product Owner and Product Manager


//--- Generics on types

class Box<T> {
    private content: T;
    
    constructor(initialContent: T){
        this.content = initialContent
    }

    getContent(): T {
        return this.content;
    }

    setContent(newContent: T): void {
        this.content = newContent
    }
}

//Using generics as string
const newBox = new Box("Hello typescript!")
console.log(newBox.getContent);

newBox.setContent("Hello typescript, and generics on classes!")
console.log(newBox.getContent);


//Using generics as number
const newBox2 = new Box(5)
console.log(`Type script rating: ${newBox2.getContent} stars.`);

newBox2.setContent(10)
console.log(newBox2.getContent);



//Type narrowing is a way to turn typescript way more strict and specific,
//it uses: type guards, instaceof operator, and intersection types
// type guards: use types
// instanceof: use instances
// intersection: 

type MyType = string | number;

function exampleFunction(value: MyType): void {
    if (typeof value === 'string'){
        console.log(value.toUpperCase())
    } else {
        console.log(value.toFixed(2))
    }
}


// Using instanceof

class Cachorro {
    bark() : void {
        console.log("Woff woff")
    }
}

class Gato2 {
    meow() : void {
        console.log('Meow')
    }
}

function animalSound(animal: Cachorro | Gato2): void{
    if(animal instanceof Cachorro){
        console.log("instance of Dog")
        animal.bark()
    } else if( animal instanceof Gato){
        console.log("instance of Cat")
        animal.meow()
    }
}

const myDog = new Cachorro();
const myCat = new Gato2();

animalSound(myDog)
animalSound(myCat)


//Intersection 
//Aqui é só combinar 2 tipos gerando um tipo composto
// type Pessoa e type Cargo - posso criar um type composto Empregado = Pessoa & Cargo