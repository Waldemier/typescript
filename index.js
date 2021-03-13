"use strict";
//TypeScript був створений для більш зручного створення проектів
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Вказування типів змінним та типи повернення результатів функцій і тд - це правило хорошого тону кодування на TypeScript
//npm i -g typescript
//tsc --init
// Запуск програми з консолі tsc index.ts => після компіляції ts код інтерпритується в js (у файлі index.js)
//В змінні не можна занести значення іншого типу
//по дефолту тип новостворених змінних є any (якщо не вказати тип самостійно)
var str = 'Some string!';
var num = 7;
var isTrue = true;
var isFalse = false;
var unkn = '17';
unkn = 15;
//Змінна може зберігати лише стрічку або число
var unkn2 = '17';
unkn = 15;
// Масиви
var numArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var numArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var strArray1 = ["w", "w", "w"];
var strArray2 = ["w", "w", "w", "w"];
var booleanArray1 = [true, false];
var booleanArray2 = [true, true, true];
var array = [1, 2, "w"];
var array2 = [1, 2, "w"];
//Функції
var a = "1";
var b = 5;
// Вказування типу повертання необов'язкове (але якщо функція нічого не повертає то варто вказувати void)
function getStr() {
    return a;
}
console.log(getStr());
function getNum() {
    return b;
}
console.log(getNum());
function sum(a, b) {
    return a + b;
}
console.log(sum(7, 10));
//Правило хорошого тону при присвоєнні функції змінній
var contain = sum;
console.log(contain(17, 25));
function test(x, y) {
    return x + y;
}
console.log('w', 7);
function test2(z) {
    console.log(z);
}
test2("Hello TypeScript!");
//Об'єкти
var obj = {
    name: "Www",
    age: 19,
    getName: function () {
        console.log(this.name);
    },
    phones: ['+38097...', '+38093...']
};
var obj2 = {
    name: "Wolodymyr",
    age: 19,
    getName: function () {
        console.log(this.name);
    },
    phones: ['+38097...', '+38093...']
};
var obj3 = {
    name: "Woleslaw",
    age: 27,
    faculty: "AMI",
    getName: function () {
        console.log(this.name);
    },
    getFaculty: function () {
        console.log(this.faculty);
    },
    phones: ['+38097...', '+38093...']
};
//Компілятор 
//tsconfig.json => "noEmitOnError" : true - не створює (не генерує) index.js файл, якщо при компілюванні TypeScript коду присутні помилки
//Спец.типи Enum, Never, Null
//Використовується для визначення констант
var Job;
(function (Job) {
    //По дефолту номерування починається з нуля
    Job[Job["Frontend"] = 0] = "Frontend";
    Job[Job["Backend"] = 71] = "Backend";
    Job[Job["Desingner"] = 72] = "Desingner"; //72 //Подальша константа приймає, збільшене на одиницю, значення попередньої константи
})(Job || (Job = {}));
var job = Job.Backend;
console.log(job);
var job2 = Job.Desingner;
console.log(job2);
var job3 = Job.Frontend;
console.log(job3);
//Ще приклад
var MathConstants;
(function (MathConstants) {
    MathConstants[MathConstants["PI"] = 3.14] = "PI";
    MathConstants[MathConstants["e"] = 2.18] = "e";
})(MathConstants || (MathConstants = {}));
console.log(MathConstants.PI);
console.log(MathConstants.e);
//---Never
function throwNewException(error) {
    throw new Error(error);
}
//---Null
var variable = 79;
variable = null;
//Класи
//По замовчуванню типи доступу полів та методів є public.
//private дає дозвіл користуватися полем або методом тільки в тілі класу, в якому вони були створені (не дозволяється доступ також об'єкту класу).
//Тип доступу protected дозволяє доступатись до цього поля власному класу та нащадкам класу, але не дає можливості доступатися до поля через екземпляр класу.
//***************** Методи == Функції, тільки вони притаманні класам, та створюються без ключового слова function !**************
var Person = /** @class */ (function () {
    function Person(name, age, course) {
        this.course = course;
        // а потім присвоєння через конструктор йому значення this.course = course;
        this.name = name;
        this.age = age;
    }
    Person.prototype.getName = function () {
        console.log("Person name is : " + this.name);
    };
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    Person.prototype.getAge = function () {
        console.log("Person age is :  " + this.age);
        console.log("Stadiying course : " + this.getCourse());
    };
    Person.prototype.getCourse = function () {
        return this.course;
    };
    return Person;
}());
var person = new Person("Woleslav", undefined, 3);
person.getName();
person.setAge(27);
person.getAge();
//console.log(person.getCourse())
//Наслідування та абстрактні класи
//Наслідувати ми можемо тільки один клас.
//Наслідування, ключове слово : extends.
//Від абстрактних (шаблонних) класів ми не можемо створювати екземпляри (вони створюються лиш для того, щоб від них наслідуватись звичайні класи), ключове слово : abstract class
//Також можлива реалізація абстрактних методів (Їхня реалізація можлива лише всередині абстрактних класів).
var Car = /** @class */ (function () {
    function Car(model, year) {
        console.log("Car constructor was called!");
        this.model = model;
        this.gradYear = year;
    }
    Car.prototype.getModel = function () { console.log(this.model); };
    return Car;
}());
var Audi = /** @class */ (function (_super) {
    __extends(Audi, _super);
    function Audi(model, year) {
        var _this = this;
        console.log("Audi constructor was called!");
        _this = _super.call(this, model, year) || this;
        return _this;
    }
    Audi.prototype.fullInfo = function () {
        console.log("Model: " + this.model + " \nGraduation Year: " + this.gradYear);
    };
    return Audi;
}(Car));
var car = new Audi("A7", 2021);
car.fullInfo(); //Model: A7 
//Graduation Year: 2021
car.getModel(); //A7
var user = {
    login: "nmyknmtyltr",
    password: "124324htyhy5j6y",
    id: 1,
    getData: function () {
        console.log(this.login, this.password);
    }
};
function getVariableLength(variable) {
    return variable.length;
}
var Animal = /** @class */ (function () {
    function Animal(name, yearOld, breed) {
        this.name = name;
        this.yearOld = yearOld;
        this.breed = breed;
    }
    Animal.prototype.getInfo = function () {
        console.log("The Animal is: " + this.getBreed() + " \nName: " + this.name + "\nYear Old: " + this.yearOld);
    };
    Animal.prototype.getBreed = function () {
        return this.breed;
    };
    Animal.prototype.setBreed = function (year) {
        this.yearOld = year;
    };
    return Animal;
}());
var animal = new Animal("Lord", 5, "German Dog");
animal.getInfo();
//generic
//Використовується в ситуціях коли ми передаємо різні типи даних.
function genericDataGetter(data) {
    return data;
}
console.log(genericDataGetter(100));
console.log(genericDataGetter(100).toFixed(2)); //Можна також явно вказувати який тип ми передаємо
console.log(genericDataGetter("Hi, TypeScript!"));
console.log(genericDataGetter("Hi, TypeScript!").length); //Є можливість доступатися до методів прототипів переданих об'єктів (Наприклад length),
// але даний метод вже буде не доступний для звичайного переданого числа.
var genericVariableFunction = genericDataGetter; //Присвоєння generic функції звичайній змінній
console.log(genericVariableFunction("I'm variable generic function!"));
console.log(genericVariableFunction(100000));
//Щоб привести стрічку до числа ми можемо використовувати такі методи: +перед змінною, parseInt, Number()
var A = /** @class */ (function () {
    function A(a, b) {
        this.a = a;
        this.b = b;
    }
    A.prototype.Additition = function () {
        return +this.a + Number(this.b);
    };
    return A;
}());
console.log(new A(50, 50).Additition());
console.log(new A(70, 10).Additition()); // 80
console.log(new A('7', '7').Additition()); // 14
//Декоратори
// Ключовий символ @
// "experimentalDecorators": true, 
function setMethodsDecorator(constructorFn) {
    constructorFn.prototype.showInfoInHtml = function () {
        var a = document.createElement('a');
        a.innerHTML = JSON.stringify(this);
        document.body.appendChild(a);
    };
}
function print(furniture) {
    console.log(furniture);
}
var Furniture = /** @class */ (function () {
    function Furniture(type, name, warrantyPeriod) {
        this.type = type;
        this.name = name;
        this.warrantyPeriod = warrantyPeriod;
    }
    Furniture = __decorate([
        setMethodsDecorator,
        print
    ], Furniture);
    return Furniture;
}());
var furniture = new Furniture("Build furniture", "lock", 10);
console.log(furniture);
furniture.showInfoInHtml();
//Namespace
// Ключове слово namespace _name_ {}
//По дефолту всі елементи namespace приватні, щоб зробити їх публічними вказуємо перед елементом ключове слово export
var Util;
(function (Util) {
    Util.PI = Math.PI;
    Util.EXP = Math.E;
    var LOG2E = Math.LOG2E; //private by default
})(Util || (Util = {}));
var PI = 3.14;
console.log(PI);
console.log(Util.PI);
console.log(Util.EXP);
