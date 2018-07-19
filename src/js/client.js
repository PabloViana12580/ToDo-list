//Definimos el estado para iniciar el totito
const state = {
  posiciones: [0, 1, 2],
  turno: 0,
  tablero:[[0, 10, 20],
           [10,11, 12],
           [20,21, 23]],
};

//Funcion de render
const render = lState => {

  //Creamos los elementos a utilizar
  const title = document.createElement('h1');
  title.innerHTML = 'TOTITO';

  const totito = document.createElement('div');
  totito.className = 'totito';

  const turnoCorriente = document.createElement('h2');
  turnoCorriente.innerHTML = '¡Amigo! Actualmente es el turno de: '

  const indicadorTurno = document.createElement('div');

  indicadorTurno.className = 'indicador';
  indicadorTurno.classList.add('equis');

  const encapsulado = document.createElement('div');
  const resetBtn = document.createElement('button');
  encapsulado.className = 'encapsulado';
  resetBtn.className = 'resetBtn';
  resetBtn.innerHTML = '¡Reset!';
  encapsulado.appendChild(resetBtn);

  // Clear previous root content
  if (root.hasChildNodes()) {
    root.innerHTML = null;
  }

  // Main rendering
  root.appendChild(title);
  root.appendChild(totito);
  root.appendChild(turnoCorriente);
  root.appendChild(indicadorTurno);
  root.appendChild(encapsulado);

  resetBtn.style.visibility = 'hidden'; 

  //Dibujamos el tablero de totito creando cada columna
  lState.posiciones.forEach( function(yPosi) {
    const col = document.createElement('div');
    col.className = 'col'; 
    totito.appendChild(col);

    //Adentro de cada columna definimos las tres posiciones o casillas
    lState.posiciones.forEach( function(xPosi){
      const casilla = document.createElement('div');
      casilla.className = 'casilla';
      col.appendChild(casilla);

      //Definimos el evento onclick
      casilla.onclick = () => {

        //Si la casilla esta vacia, dependiendo del turno se rellena con circulo o con equis
        if(casilla.classList.contains("circulo")==false && casilla.classList.contains("equis") ==false){
          if((lState.turno % 2) == 0){
            casilla.classList.add("equis");
            indicadorTurno.classList.add('circulo');
            lState.tablero[xPosi][yPosi] = 1;
            lState.turno +=1;

          }else{
            casilla.classList.add("circulo");
            indicadorTurno.classList.remove('circulo');
            indicadorTurno.classList.add('equis');
            lState.tablero[xPosi][yPosi] = 0;
            lState.turno +=1;

          }

          //Chequeamos si cualquiera de las tres casillas horizontales son iguales para definir ganador
          for (let i = 0; i < 3; i++) {
            const pivote = lState.tablero[i][0];
            if(pivote == lState.tablero[i][1] && pivote == lState.tablero[i][2]){
              if(pivote == 1){
                turnoCorriente.innerHTML = '¡Tenemos un ganador! Felicidades al jugador que utilizo "X"'
                indicadorTurno.remove('equis');
                indicadorTurno.remove('circulo');
                totito.classList.add("done");
                resetBtn.style.visibility = 'visible';
              }else{
                turnoCorriente.innerHTML = '¡Tenemos un ganador! Felicidades al jugador que utilizo "O"'
                indicadorTurno.remove('equis');
                indicadorTurno.remove('circulo');
                totito.classList.add("done");
                resetBtn.style.visibility = 'visible';
              }

            }
          }

          //Chequeamos si cualquiera de las tres casillas verticales son iguales para definir ganador
          for (let i = 0; i < 3; i++) {
            const pivote = lState.tablero[0][i];
            if(pivote == lState.tablero[1][i] && pivote == lState.tablero[2][i]){
              if(pivote == 1){
                turnoCorriente.innerHTML = '¡Tenemos un ganador! Felicidades al jugador que utilizo "X"'
                indicadorTurno.remove('equis');
                indicadorTurno.remove('circulo');
                totito.classList.add("done");
                resetBtn.style.visibility = 'visible';
              }else{
                turnoCorriente.innerHTML = '¡Tenemos un ganador! Felicidades al jugador que utilizo "O"'
                indicadorTurno.remove('equis');
                indicadorTurno.remove('circulo');
                totito.classList.add("done");
                resetBtn.style.visibility = 'visible';
              }

            }
          }

          //Chequeamos la primer diagonal (izquieda -> derecha)
          const check = lState.tablero[1][1]
          if(check == lState.tablero[0][0] && check == lState.tablero[2][2]){
              if(check == 1){
                turnoCorriente.innerHTML = '¡Tenemos un ganador! Felicidades al jugador que utilizo "X"'
                indicadorTurno.remove('equis');
                indicadorTurno.remove('circulo');
                totito.classList.add("done");
                resetBtn.style.visibility = 'visible';
              }else{
                turnoCorriente.innerHTML = '¡Tenemos un ganador! Felicidades al jugador que utilizo "O"'
                indicadorTurno.remove('equis');
                indicadorTurno.remove('circulo');
                totito.classList.add("done");
                resetBtn.style.visibility = 'visible';
              }

          }

          //Chequeamos la segunda diagonal (derecha -> izquierda)
          if(check == lState.tablero[0][2] && check == lState.tablero[2][0]){
              if(check == 1){
                turnoCorriente.innerHTML = '¡Tenemos un ganador! Felicidades al jugador que utilizo "X"'
                indicadorTurno.remove('equis');
                indicadorTurno.remove('circulo');
                totito.classList.add("done");
                resetBtn.style.visibility = 'visible';
              }else{
                turnoCorriente.innerHTML = '¡Tenemos un ganador! Felicidades al jugador que utilizo "O"'
                indicadorTurno.remove('equis');
                indicadorTurno.remove('circulo');
                totito.classList.add("done");
                resetBtn.style.visibility = 'visible';
              }

          }

        }

        //En caso se acaban los turnos se declara empate
        if(lState.turno == 9){
          turnoCorriente.innerHTML = '¡El juego a terminado en empate!'
          resetBtn.style.visibility = 'visible';
          indicadorTurno.classList.remove('circulo');
        }
      }

    });

    
  });

  //Definimos el boton para volver a empezar
  resetBtn.onclick = () => {
    window.location.reload(true);
  }


}

//Llamamos funcion render
render(state);
