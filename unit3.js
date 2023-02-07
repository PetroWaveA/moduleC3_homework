// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}

function getObject(object) {
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            console.log(`Key: ${key}`);
            console.log(`Propert: ${object[key]}`);
        }
    }
}

getObject(obj)

// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет, есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

function checkPropInObj (str, obj) {
    return (str in obj);
  }

console.log(checkPropInObj('d', obj))

// Написать функцию, которая создает пустой объект, но без прототипа.

function createObjWithoutProto() {
    return Object.create(null);
}