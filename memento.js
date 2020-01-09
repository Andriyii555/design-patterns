/*
Снимок -
поведенческий паттерн, который позволяет
сохранять и восстанавливать предыдущее состояние обЪекта.
К примеру редактор с функцией восстановлеия (Ctrl + Z)

https://www.youtube.com/watch?v=kAY-ozumlr4&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=18
*/

class Memento {
    constructor(value) {
        this.value = value;
    }
}

const creator = {
    save: val => new Memento(val),
    restore: memento => memento.value,
}

class CareTaker {
    constructor() {
        this.values = [];
    }

    addMemento(memento) {
        this.values.push(memento);
    }

    getMemento(index) {
        return this.values[index];
    }
}

const careTaker = new CareTaker();

careTaker.addMemento(creator.save('Hello'));
careTaker.addMemento(creator.save('Hello World'));
careTaker.addMemento(creator.save('Hello World!!!'));

console.log(creator.restore(careTaker.getMemento(1)));