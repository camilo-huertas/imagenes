let imagenes = [
"https://i.linio.com/p/ceaeff022357316985c57fa3dd796fc7-product.jpg",
"https://images-na.ssl-images-amazon.com/images/I/81YM1unmEvL._AC_SX569_.jpg",  
"https://http2.mlstatic.com/D_NQ_NP_954204-MCO27817388679_072018-O.jpg"
]

let previsualisar = document.getElementById("prev");
let atras = document.getElementById("atras");
let img = document.getElementById("imagen");
var conteo = 0;
var prev =()=>{
    conteo +=1;
    switch(conteo){
    case 1:
        img.src=imagenes[0];
        break;
    case 2:
        img.src=imagenes[1];
        break;
    case 3:
        img.src=imagenes[2];
        if(conteo = 3){
            
        conteo = conte;
        
        }
           
        break;
    }
    console.log(conteo)
}
previsualisar.addEventListener("click", prev);
let conte = 0;
var retro =()=>{
    conte +=1;
    console.log(conte)
    switch(conte){
    case 1:
        img.src=imagenes[2];
        break;
    case 2:
        img.src=imagenes[1];
        break;
    case 3:
        img.src=imagenes[0];
        if(conte >= 3){
          conte = conteo;
            
        } 
        break;
    }
    
}
atras.addEventListener("click", retro);
