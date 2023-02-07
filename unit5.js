// Переписать консольное приложение из предыдущего юнита на классы.

class ElectricalApplience {
    constructor (name, power) {
        this.name = name;
        this.power = power;
        this.switch = false;
    }

    isOn() {
        console.log(this + "switch on");
        this.switch = true;
    }

    isOff() {
        console.log(this + "switch off");
        this.switch = false;
    }
}

class Lamp extends ElectricalApplience {
    constructor(name, power, material, country) {
        super(name, power);
        this.material = material;
        this.country = country
        this.switch = false
    }
}

class Computer extends ElectricalApplience {
    constructor(name, power, processor, color, type) {
        super(name, power);
        this.processor = processor;
        this.color = color;
        this.type = type;
        this.switch = false
    }
}

const redLamp = new Lamp("IKEA", 5, "plastic", "Sweden");
const workingPC = new Computer("Asus", 120, "Intel", "Black", "laptop");

console.log(workingPC);
workingPC.isOn();
console.log(workingPC);