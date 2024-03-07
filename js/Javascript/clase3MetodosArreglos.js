let numeros = [];

let nombres = [];

let clases =[];

const cosas =["Cinco Jarrones","Una Casa","Dos Motos","Cuatro Sillas"];


//Cosas
cosas.forEach(cosa=>{
    console.log("Usted tiene",cosa);
});

console.log(cosas.filter(cosa => {
    return cosa.includes("s")
}));

//Numeros
for (let i = 0; i <= 5; i++) {
    numeros.push(i);
};

console.log(numeros);

console.log(numeros.map(numero=>{
    return Math.pow(numero,numero)
}));

//Clases
clases.unshift("Calculo"),
clases.unshift("Algebra")
clases.unshift("Lengua Materna")
clases.unshift("Matematica Basica")

clases.forEach(clase=>{
    console.log(clase);
});

//Nombres

clases.forEach(clase => {
    nombres.push(clase);
    

    
});

console.log(nombres);