let menu = [
    { id: 1, name: "Pizza", price: 150, stock: 20 },
    { id: 2, name: "Empanada", price: 50, stock: 3 },
    { id: 3, name: "Pasta", price: 80, stock: 10 },
    { id: 4, name: "Lasagna", price: 90, stock: 10 }
]


function list() {
    menu.forEach(menu => {
        alert("Tenemos " + menu.stock + " " + menu.name + "s")
        console.log("Tenemos " + menu.stock + " " + menu.name + "s")
    });
    return (options())
}

function find() {

    let menuName = prompt("Nombra algo del menú para saber su precio, te recordamos que contamos con: \nPizza\nEmpanada\nPasta\nLasagna")
    let findPrice = menu.find(menu => menu.name == menuName)
    if (findPrice) {
        console.log("El precio de la " + findPrice.name + " es de " + "$" + findPrice.price)
        alert("El precio de la " + findPrice.name + " es de " + "$" + findPrice.price)
    }
    return (options())
}

function options() {
    let option = (prompt("Ingrese la opcion para obtener diferente información \n1. Para saber la lista de nuestro menú y cantidades en Stock \n2. Escribe el nombre del producto para saber su precio. \n3. Salir"))
    if (option == 1) {
        list();
    }

    if (option == 2) {
        find();
    }  
    else { }
}

options();