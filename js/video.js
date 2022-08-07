let video= document.querySelector(".video"); 

let duracion=document.querySelector(".duracion")

function inicio() {
    video.play()
    duracion.textContent=`Duración Video: ${video.duration}`
}

function pausar() {
    video.pause()
}

