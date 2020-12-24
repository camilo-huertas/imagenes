let imagenes = [
"https://www.psicoactiva.com/wp-content/uploads/blog/2016/03/frases-amor3-1.jpg",
"https://www.ecestaticos.com/image/clipping/f07ddc1be5662925804003737e17843c/frases-de-amor-bonitas-y-originales-para-enamorar-y-conquistar.jpg",  
"https://www.ecured.cu/images/thumb/f/ff/Amor-adentro.jpg/260px-Amor-adentro.jpg"
]

let adelante = document.getElementById("adelante");
let atras = document.getElementById("atras");
let prev =(img)=>{
    img = document.getElementById("img");
    if(img.src=imagenes[0]){
        img.src=imagenes[1];
    }else{
        img.src=imagenes[0];
    }
    /* nuevo codigo */
}
adelante.addEventListener("click", prev);