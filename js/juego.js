//EVENTOS PARA EL ELEMENTO A ARRASTRAR

let primera_imagen=document.querySelector(".imagen_tres");

primera_imagen.addEventListener('dragstart',(evento)=>{
    evento.dataTransfer.setData("Text","./imagenes/rompe3.png");
})

primera_imagen.addEventListener('dragend',()=>{
    primera_imagen.style.display="none";
})



let segunda_imagen=document.querySelector(".imagen_dos");

segunda_imagen.addEventListener('dragstart',(evento)=>{
    evento.dataTransfer.setData("Text","./imagenes/rompe2.png");
})

segunda_imagen.addEventListener('dragend',()=>{
    segunda_imagen.style.display="none";
})



let tercera_imagen=document.querySelector(".imagen_uno");

tercera_imagen.addEventListener('dragstart',()=>{
    evento.dataTransfer.setData("Text","./imagenes/rompe1.png");
})

tercera_imagen.addEventListener('dragend',()=>{
    tercera_imagen.style.display="none";
})


//EVENTOS PARA LA ZONA DE DESTINO


let zona_uno = document.querySelector('.rompecabezas_uno')

zona_uno.addEventListener('dragover',(evento)=>{
    evento.preventDefault();
})

zona_uno.addEventListener('drop',(evento)=>{
    let info=evento.dataTransfer.getData("Text");
    zona_uno.innerHTML=`<img src="${info}"/>`;  
}) 



let zona_dos = document.querySelector('.rompecabezas_dos')

zona_dos.addEventListener('dragover',(evento)=>{
    evento.preventDefault();
})

zona_dos.addEventListener('drop',(evento)=>{
    let info=evento.dataTransfer.getData("Text");
    zona_dos.innerHTML=`<img src="${info}"/>`;  
})


let zona_tres = document.querySelector('.rompecabezas_tres')

zona_tres.addEventListener('dragover',(evento)=>{
    evento.preventDefault();
})

zona_tres.addEventListener('drop',(evento)=>{
    let info=evento.dataTransfer.getData("Text");
    zona_tres.innerHTML=`<img src="${info}"/>`;  
})
 