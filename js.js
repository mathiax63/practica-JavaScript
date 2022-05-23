
/*

let pie =function(distancia){
    return (distancia>=0 && distancia <=1000)
}


let bicicleta = function(distancia){
    return (distancia>=1000 && distancia <=10000)
}
let colectivo = function(distancia){
    return (distancia>=10000 && distancia <=30000)
}

let auto = function(distancia){
    return (distancia>=30000 && distancia <=100000)
}
let avion = function(distancia){
    return (distancia<=100000)
}

let transporte =[pie,bicicleta,colectivo,auto,avion]


if(distancia===5) {
console.log("llegue?")
let resultado = transporte;
let r = resultado.find(e => e > distancia)
alert(r)
console.log("llegue?")


}
console.log("llegue?")

console.log(transporte)

let objeto= [
    {
    nombre: "pie",
    distancias: function(d){
    return (0=0 && d <=1000)
}
},
{
    nombre: "bicicleta",
    distancias:function(d){
        return (d>=1000 && d <=10000)
    }
},
{
nombre: "colectivo",
distancias:function(d){
    return (d>=10000 && d <=30000)
}
},
{
    nombre:"auto",
    distancias:function(d){
        return (d>=30000 && d <=100000)
    }  
},
{
    nombre:"avion",
    distancias: function(d){
        return (d<=100000)
    }
}

]

let objetor = objeto.find(e =>e.distancias=parseInt(prompt("distancia que recorer")));

console.log(objetor);*/

let dis = parseInt(prompt("distancia que recorer"))
if(dis >=0 && dis<=1000){
    alert("su transoporte mas optimo es caminar")
    }else if(dis>= 1000 && dis<=10000){
        alert("su mejor transporte es la bicicleta")
    }else if(dis>= 10000 && dis<=30000){
        alert("su mejor transporte es el colectivo")
    }
    else if(dis>= 30000 && dis<=100000){
        alert("su mejor transporte es el auto")
    }else if(dis >=1000000){
        alert("su mejor transporte es el avion")
    }else{
        alert("tiene que marcar un recorido")
    }



    let array= [1,2,3,4,5,55,7,33,567,1,4,672,11,87]

    let alto = Math.max(...array)
    console.log(alto)

