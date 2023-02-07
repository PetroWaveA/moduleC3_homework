// Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
// Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 
// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

function ElectricalApplience (name, power) {
    this.name = name,
    this.power = power, 
    this.switch = false
}

ElectricalApplience.prototype.isOn = function() {
    console.log(this + "switch on");
    this.switch = true;
}

ElectricalApplience.prototype.isOff = function() {
    console.log(this + "switch off");
    this.switch = false;
}

function Lamp(name, power, material, country) {
    this.name = name,
    this.power = power,
    this.material = material,
    this.country = country
}

function Computer(name, power, processor, color, type) {
    this.name = name,
    this.power = power,
    this.processor = processor,
    this.color = color,
    this.type = type,
    this.switch = false
}

Lamp.prototype = new ElectricalApplience();
Computer.prototype = new ElectricalApplience();

const redLamp = new Lamp("IKEA", 5, "plastic", "Sweden");
const workingPC = new Computer("Asus", 120, "Intel", "Black", "laptop");

console.log(workingPC);
workingPC.isOn();
console.log(workingPC);

