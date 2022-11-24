function iniciarJuego () {
    //Todas estas const toman la información de los botones del HTML
    const rock = document.getElementById("stone"); 
    const paper = document.getElementById("paper");
    const scissors = document.getElementById("scissors");

    function agregarClass() {
        let stoneInput = document.getElementById('stoneInput').checked;
        let paperInput = document.getElementById('paperInput').checked;
        let scissorsInput = document.getElementById('scissorsInput').checked;
        
        if (stoneInput === true){
            rock.classList.toggle("personajeRed");
        }
        else if (paperInput === true){
            paper.classList.toggle("personajeRed");
        }
        else if (scissorsInput === true){
            scissors.classList.toggle("personajeRed");
        }
    }

    // Detectamos el evento Click
    rock.addEventListener('click', agregarClass);
    paper.addEventListener('click', agregarClass);
    scissors.addEventListener('click', agregarClass);
}



// Esperamos a que cargue todo el html y css para carjar el javascript
window.addEventListener('load', iniciarJuego);