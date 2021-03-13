//TypeScript був створений для більш зручного створення проектів

//Вказування типів змінним та типи повернення результатів функцій і тд - це правило хорошого тону кодування на TypeScript

//npm i -g typescript
//tsc --init

// Запуск програми з консолі tsc index.ts => після компіляції ts код інтерпритується в js (у файлі index.js)

//В змінні не можна занести значення іншого типу
//по дефолту тип новостворених змінних є any (якщо не вказати тип самостійно)
let str: string = 'Some string!';

let num: number = 7;

let isTrue = true;
let isFalse: boolean = false;

let unkn: any = '17';
unkn = 15;

//Змінна може зберігати лише стрічку або число
let unkn2: string | number =  '17';
unkn = 15;

// Масиви

let numArray1: number[] = [1,2,3,4,5,6,7,8,9]
let numArray2: Array<number> = [1,2,3,4,5,6,7,8,9]

let strArray1: string[] = ["w","w","w"]
let strArray2: Array<string> = ["w","w","w","w"]

let booleanArray1: boolean[] = [true,false]
let booleanArray2: Array<boolean> = [true,true,true]

let array: [number, number, string] = [1, 2, "w"]
let array2: Array<any> = [1, 2, "w"]

//Функції

const a:string = "1"
const b = 5

// Вказування типу повертання необов'язкове (але якщо функція нічого не повертає то варто вказувати void)
function getStr(): string {
    return a;
}

console.log(getStr())



function getNum(): number {
    return b;
}

console.log(getNum())



function sum(a: number, b:number): number
{
    return a + b;
}

console.log(sum(7,10))

//Правило хорошого тону при присвоєнні функції змінній
let contain: (num1:number, b:number) => number = sum;
console.log(contain( 17, 25 ))


function test(x: string, y: number): string
{
    return x+y
}

console.log('w', 7)



function test2(z: string): void {
    console.log(z)
}

test2("Hello TypeScript!")

//Об'єкти

const obj: { name: string, age: number, getName: () => void, phones: string[] } = {

    name: "Www",
    age: 19,


    getName(): void {
        console.log(this.name)
    },

    phones: ['+38097...', '+38093...']
}


//? перед типами змінних дає зрозуміти, що змінна не обов'язкова або не застусовується в одному з об'єктів
type User = { name: string, age: number, faculty?:string, getName: () => void, getFaculty?: () => void, phones: string[] };

const obj2: User = {

    name: "Wolodymyr",
    age: 19,


    getName(): void {
        console.log(this.name)
    },

    phones: ['+38097...', '+38093...']
}


const obj3: User = {

    name: "Woleslaw",
    age: 27,
    faculty: "AMI",

    getName(): void {
        console.log(this.name)
    },

    getFaculty(): void{
        console.log(this.faculty)
    },

    phones: ['+38097...', '+38093...']
}

//Компілятор 

//tsconfig.json => "noEmitOnError" : true - не створює (не генерує) index.js файл, якщо при компілюванні TypeScript коду присутні помилки


//Спец.типи Enum, Never, Null

//Використовується для визначення констант
enum Job
{
    //По дефолту номерування починається з нуля
    Frontend, //0
    Backend = 71,
    Desingner //72 //Подальша константа приймає, збільшене на одиницю, значення попередньої константи
}

const job: Job = Job.Backend;
console.log(job);

const job2: Job = Job.Desingner;
console.log(job2);

const job3: Job = Job.Frontend;
console.log(job3);

//Ще приклад
enum MathConstants
{
    PI = 3.14,
    e = 2.18
}

console.log(MathConstants.PI)
console.log(MathConstants.e)

//---Never

function throwNewException(error:string): never
{
    throw new Error(error)
}

//---Null

let variable: number | null = 79;
variable = null;

//Класи
//По замовчуванню типи доступу полів та методів є public.
//private дає дозвіл користуватися полем або методом тільки в тілі класу, в якому вони були створені (не дозволяється доступ також об'єкту класу).
//Тип доступу protected дозволяє доступатись до цього поля власному класу та нащадкам класу, але не дає можливості доступатися до поля через екземпляр класу.

//***************** Методи == Функції, тільки вони притаманні класам, та створюються без ключового слова function !**************

class Person
{
    public name: string;
    private age: number | undefined;
    protected faculty: string | undefined; //Те саме що private, але доступний в класах наслідників

    constructor(name: string, age: number | undefined, public course: number){ //public course: number - це те саме що створення поля,
                                                                            // а потім присвоєння через конструктор йому значення this.course = course;
        this.name = name;
        this.age = age;
    }

    public getName(): void {
        console.log(`Person name is : ${this.name}`);
    }
    
    setAge(age:number): void { // default public
        this.age = age;
    }

    getAge(): void {
        console.log(`Person age is :  ${this.age}`)
        console.log(`Stadiying course : ${this.getCourse()}`)
    }

    private getCourse():number{
        return this.course;
    }
}

const person = new Person("Woleslav", undefined, 3);
person.getName();
person.setAge(27)
person.getAge();
//console.log(person.getCourse())


//Наслідування та абстрактні класи

//Наслідувати ми можемо тільки один клас.
//Наслідування, ключове слово : extends.
//Від абстрактних (шаблонних) класів ми не можемо створювати екземпляри (вони створюються лиш для того, щоб від них наслідуватись звичайні класи), ключове слово : abstract class
//Також можлива реалізація абстрактних методів (Їхня реалізація можлива лише всередині абстрактних класів).

abstract class Car { //Екземпляри даного класу створювати забороняється
    protected model: string; //Данні поля будуть доступні у дочірньому класі
    protected gradYear: number;
    constructor(model: string, year:number)
    {
        console.log("Car constructor was called!")
        this.model = model;
        this.gradYear = year;
    }
    abstract fullInfo(): void;
    getModel(): void { console.log( this.model )}
}

class Audi extends Car {
    constructor(model: string, year:number)
    {
        console.log("Audi constructor was called!")
        super(model, year);
    }
    fullInfo(): void { 
        console.log(`Model: ${this.model} \nGraduation Year: ${this.gradYear}`);
    }
}

const car = new Audi("A7", 2021);
car.fullInfo(); //Model: A7 
               //Graduation Year: 2021

car.getModel(); //A7

//Інтерфейси

//Інтерфейси задають мінімальний функціонал, який повинен бути реалізований у майбутніх об'єктах або класах. 
// Також використовуються в функціях для перевірки функціоналу змінних які передаються (Якщо властивості змінної не відповідають потребам інтерфейсу, така змінна в функцію не допускається).

interface IUser {
    login: string;
    password: string;
    id: number;
    getData(): void;
}

const user:IUser = {
    login: "nmyknmtyltr",
    password: "124324htyhy5j6y",
    id: 1,
    getData(): void {
        console.log(this.login, this.password)
    }

}

interface ICondition {
    length: number;
}

function getVariableLength( variable: ICondition  ):number { //Змінна мусить містити властивість lenght || Або можемо обійтись без інтерфейсу вказавши variable: { lenght:number }
    return variable.length;
}

//implements for classes
//Імплементуватися від інтерфейсів ми можемо безліч разів.

interface IAnimalClassVariablesContain {
    name?: string; //? вказує на те, що поле може бути необов'язковим до створення
    yearOld: number;
    breed: string;
}

interface IAnimalClassMethodsContain {
    getInfo(): void;
    setBreed(year:number): void;
    getBreed(): string;
}

class Animal implements IAnimalClassVariablesContain, IAnimalClassMethodsContain {

    public breed: string;
    constructor( public name: string, public yearOld: number, breed:string){
        this.breed = breed;
    }
    getInfo(): void
    {
        console.log(`The Animal is: ${this.getBreed()} \nName: ${this.name}\nYear Old: ${this.yearOld}`)
    }
    getBreed(): string
    {
        return this.breed;
    }
    setBreed(year:number): void
    {
        this.yearOld = year;
    }

}

const animal = new Animal("Lord", 5, "German Dog")
animal.getInfo();

//generic

//Використовується в ситуціях коли ми передаємо різні типи даних.

function genericDataGetter<T>( data:T ) : T  // T - умовний тип даних який ми передаємо (Це може бути string, number і так далі).
                                            // Накшталт let array: Array<number> = ...
{
    return data;
}

console.log(genericDataGetter(100))
console.log(genericDataGetter<number>(100).toFixed(2)) //Можна також явно вказувати який тип ми передаємо
console.log(genericDataGetter<string>("Hi, TypeScript!"))
console.log(genericDataGetter<string>("Hi, TypeScript!").length) //Є можливість доступатися до методів прототипів переданих об'єктів (Наприклад length),
                                                                // але даний метод вже буде не доступний для звичайного переданого числа.
const genericVariableFunction: <T>(data:T) => T = genericDataGetter; //Присвоєння generic функції звичайній змінній
console.log(genericVariableFunction<string>( "I'm variable generic function!" ))
console.log(genericVariableFunction<number>( 100000 ))

//Щоб привести стрічку до числа ми можемо використовувати такі методи: +перед змінною, parseInt, Number()

class A<T extends number | string> { //Вказуємо що типи класу можуть бути тільки number, або string (Тип genetic так би мовити наслідує ці типи)
    constructor(private a: T, private b: T){}
    public Additition(): number
    {
        return +this.a + Number(this.b);
    }
}
console.log(new A(50, 50).Additition())
console.log(new A<number>(70, 10).Additition()) // 80
console.log(new A<string>('7', '7').Additition()) // 14


//Декоратори

// Ключовий символ @
// "experimentalDecorators": true, 

function setMethodsDecorator(constructorFn: Function)
{
    constructorFn.prototype.showInfoInHtml = function() {
        const a = document.createElement('a');
        a.innerHTML = JSON.stringify(this);
        document.body.appendChild(a)
    }
}
function print(furniture : any): void
{
    console.log(furniture)
}


@setMethodsDecorator
@print
class Furniture {
    constructor(public type: string, private name: string, private warrantyPeriod: number){}
}

const furniture = new Furniture("Build furniture", "lock", 10);
console.log(furniture);
(<any>furniture).showInfoInHtml();

//Namespace

// Ключове слово namespace _name_ {}
//По дефолту всі елементи namespace приватні, щоб зробити їх публічними вказуємо перед елементом ключове слово export

namespace Util {
    export const PI = Math.PI;
    export const EXP = Math.E;
    const LOG2E = Math.LOG2E; //private by default
}

const PI = 3.14;
console.log(PI)

console.log(Util.PI)
console.log(Util.EXP)

//TypeScript і Webpack

// npm init;
// npm i --save-dev webpack typescript;
//create webpack.config.js;
//Вставляємо дефолтну конфігурацію webpack.config.js (з офіційного сайту);
//create any dists and files for further (подальшої) work;
//Connection script file bundle.js in index.html;
//npm i awesome-typescript-loader --save-dev --force та вставляємо конфігурацію з гітхаба у webpack.config.js (встановили loader локально)
// (PS. міняємо назву властивості loaders на rules та видаляємо у властивості extensions пусту стрічку в масиві); || Скачування необхідного лоадеру для ts
//Запускаємо webpack через консоль ключовим словом webpack;
//webpack --mode=none // Для кращої читабельності коду в bundle.js

//Як результат ми отримали повністю згерерований es5 код у bundle.js на основі коду написаного на typescript (файл index.ts)

//********PS. це був останній урок, до цього ми запускали програму (код) беспосередньо через консоль, командою tsc index.ts,
// та як результат отримували інтерпритований код typescript у код стандарту ecmascript5, який записувався у index.js файл та запускався.

//Запускаємо index.html у браузері => відкриваємо консоль (F12) та отримуємо результат всієї програми.