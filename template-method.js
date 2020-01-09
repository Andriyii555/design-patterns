/*
Шаблонный метод -
поведенческий паттерн - определяет базовые шаги исполнения алгоритма
и выполнение каждого из этих шагов делегирует на соответствующие методы или подклассы

https://www.youtube.com/watch?v=kFDEyshivVc&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=19
*/

class Builder {
    build() {
        this.addEngine();
        this.installChassis();
        this.addElectronic();
        this.collectAccessories();
    }
}

class TeslaBuilder extends Builder {
    addEngine() {
        console.log('Add Electronic Engine!');
    }

    installChassis() {
        console.log('Intsall Tesla Chassis!');
    }

    addElectronic() {
        console.log('Add Special Electronic!');
    }

    collectAccessories() {
        console.log('Collect Accessorieses!');
    }
}

class BmwBuilder extends Builder {
    addEngine() {
        console.log('Add BMW Engine!');
    }

    installChassis() {
        console.log('Intsall BMW Chassis!');
    }

    addElectronic() {
        console.log('Add Electronic!');
    }

    collectAccessories() {
        console.log('Collect Accessorieses!');
    }
}

const teslaBuilder = new TeslaBuilder();
const bmwBuilder = new BmwBuilder();

teslaBuilder.build();
bmwBuilder.build();