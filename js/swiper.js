
    var slider= document.getElementById('slider');
    var active= document.getElementById('active');
    var line1= document.getElementById('line1');
    var line2= document.getElementById('line2');
    var line3= document.getElementById('line3');
    var line4= document.getElementById('line4');
    var posicion= 0;

    line1.onclick = function () {
        slider.style.transform = 'translateX(0)';
        active.style.top= '0%';
        moveScroll(posicion);
        posicion= 0;
    }
    line2.onclick = function () {
        slider.style.transform = 'translateX(-40%)';
        active.style.top= '25%';
        posicion= 1;
    }
    line3.onclick = function () {
        slider.style.transform = 'translateX(-85%)';
        active.style.top= '50%';
        posicion= 2;
    }
    line4.onclick = function () {
        slider.style.transform = 'translateX(-130%)';
        active.style.top= '75%'; 
        posicion= 3;
    }

    const video= document.querySelector('.video');
    const gris= document.querySelector('.gris'); 

    video.addEventListener('mouseover', function(e){
            video.play();
            gris.classList.remove("gris");
    })

    video.addEventListener('mouseout', function(e){
        video.pause();
        gris.classList.add("gris");
    })

    var arrayPosicionesX = new Array();
    var arrayPosicionesY = new Array();
    arrayPosicionesX = ['translateX(0%)','translateX(-40%)','translateX(-85%)','translateX(-130%)'];
    arrayPosicionesY = ["0%", "25%","50%","75%"];
   
    window.addEventListener("wheel", event => {
        const delta = Math.sign(event.deltaY);
        var move=2;
    
        if (delta>0){
            
            if(posicion>=4){
                posicion = 4;
                move= arrayPosicionesY[posicion-1];
                active.style.top = "'" + move + "'"; 
                slider.style.transform = arrayPosicionesX[posicion];
            }else{
                move= arrayPosicionesY[posicion+1];
                active.style.top = move;
                slider.style.transform = arrayPosicionesX[posicion+1];
                posicion++;
            }

        }else{
            
            if(posicion<=0){
                posicion = 0;
                move= arrayPosicionesY[posicion];
                active.style.top = move;
                slider.style.transform = arrayPosicionesX[posicion];
            }else{
                move= arrayPosicionesY[posicion-1];
                active.style.top = move;
                slider.style.transform = arrayPosicionesX[posicion-1];
                posicion--;
            }

        }

    });