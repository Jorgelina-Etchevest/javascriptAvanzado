//EVENTOS PARA EL ELEMENTO A ARRASTRAR

let primera_imagen=document.querySelector(".imagen_tres");

primera_imagen.addEventListener('dragstart',(evento)=>{
    console.log("se inicio el arrastre de la imagen");
    evento.dataTransfer.setData("Text","./imagenes/rompe3.png");
})

primera_imagen.addEventListener('dragend',()=>{
    console.log("se soltó la imagen");
    primera_imagen.style.display="none";
})



let segunda_imagen=document.querySelector(".imagen_dos");

segunda_imagen.addEventListener('dragstart',(evento)=>{
    console.log("se inicio el arrastre de la imagen");
    evento.dataTransfer.setData("Text","./imagenes/rompe2.png");
})

segunda_imagen.addEventListener('dragend',()=>{
    console.log("se soltó la imagen");
    segunda_imagen.style.display="none";
})



let tercera_imagen=document.querySelector(".imagen_uno");

tercera_imagen.addEventListener('dragstart',()=>{
    console.log("se inicio el arrastre de la imagen");
    evento.dataTransfer.setData("Text","./imagenes/rompe1.png");
})

tercera_imagen.addEventListener('dragend',()=>{
    console.log("se soltó la imagen");
    tercera_imagen.style.display="none";
})


//EVENTOS PARA LA ZONA DE DESTINO


let zona_uno = document.querySelector('.rompecabezas_uno')

zona_uno.addEventListener('dragover',(evento)=>{
    console.log("dentro de zona de destino");
    evento.preventDefault();
})

zona_uno.addEventListener('drop',(evento)=>{
    let info=evento.dataTransfer.getData("Text");
    console.log(info)
    zona_uno.innerHTML=`<img src="${info}"/>`;  
}) 



let zona_dos = document.querySelector('.rompecabezas_dos')

zona_dos.addEventListener('dragover',(evento)=>{
    console.log("dentro de zona de destino");
    evento.preventDefault();
})

zona_dos.addEventListener('drop',(evento)=>{
    let info=evento.dataTransfer.getData("Text");
    console.log(info)
    zona_dos.innerHTML=`<img src="${info}"/>`;  
})


let zona_tres = document.querySelector('.rompecabezas_tres')

zona_tres.addEventListener('dragover',(evento)=>{
    console.log("dentro de zona de destino");
    evento.preventDefault();
})

zona_tres.addEventListener('drop',(evento)=>{
    let info=evento.dataTransfer.getData("Text");
    console.log(info)
    zona_tres.innerHTML=`<img src="${info}"/>`;  
})
 