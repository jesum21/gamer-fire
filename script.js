function iniciarjuego() { 
    let botonMascotaJugador =document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)
    }
function  seleccionarMascotaJugador(){
    let inputsarigueya =document.getElementById('sarigueya')
    let inputhipopotamo =document.getElementById('hipopotamo')
    let inputcocodrilo =document.getElementById('cocodrilo')
    let inputleon  =document.getElementById('leon')
    let inputcaiman =document.getElementById('caiman')
    let inputrinoceronte =document.getElementById('rinoceronte')
    let spanMascotaJugador=document.getElementById('mascota-jugador')

    if(inputsarigueya.checked){
        spanMascotaJugador.innerHTML = 'sarigueya'
} else if(inputhipopotamo.checked){ 
    spanMascotaJugador.innerHTML ='hipopotamo'
} else if(inputcocodrilo.checked){
    spanMascotaJugador.innerHTML ='cocodrilo'
} else if(inputleon.checked){
    spanMascotaJugador.innerHTML ='leon'
} else if(inputcaiman.checked){ 
    spanMascotaJugador.innerHTML ='caiman'
} else if(inputrinoceronte.checked){
    spanMascotaJugador.innerHTML ='rinoceronte'
  } else{  
    alert('seleciona una mascota')
 } 
}

window.addEventListener('load',iniciarjuego)