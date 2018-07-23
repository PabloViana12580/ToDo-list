/*
-------------- Laboratorio tres web ToDo List -------------------
-> Pablo Viana Vidal - 16091
-> Fecha: 18/07/2018
-> version 1.0
*/

//Definimos el estado para almacenar las tareas y agregar nuevas
const state = {
  tareas: [],
  esperando: false,
  filtro: 'Todos',
};

const crearBoton = (nombre) =>{
  const boton = document.createElement("button");
  boton.className = "boton";
  boton.id = nombre;
  return boton;
}

//Funcion de render
const render = lState => {

  //Creamos el contenedor donde irán nuestros botones de filtros
  const divBotones = document.createElement('div');
  divBotones.className = 'divBotones';

  const despliegue = document.createElement('div');
  despliegue.className = 'despliegue';

  const divAgregar = document.createElement('div');
  divAgregar.className = 'agregar';

  const divInput = document.createElement('input');
  divInput.className = 'input';

  const btnAgregar = document.createElement('button');
  btnAgregar.className = 'btnAgregar';

  const t_agregar = document.createTextNode("Agregar tarea");
  const t_todos = document.createTextNode("Todos");
  const t_comple = document.createTextNode("Completados");
  const t_activos = document.createTextNode("Activos"); 

  btnAgregar.appendChild(t_agregar);

  divAgregar.appendChild(divInput);
  divAgregar.appendChild(btnAgregar);

  // Clear previous root content
  if (root.hasChildNodes()) {
    root.innerHTML = null;
  }

  root.className = 'fondo';
  // Main rendering
  root.appendChild(divBotones);
  root.appendChild(despliegue);
  root.appendChild(divAgregar);
  

  const categorias = ['todos','completados','activos']

  categorias.forEach(
    nombre => {
      //creamos los botones y los ponemos en el div designado
      const botones = crearBoton(nombre);
      divBotones.appendChild(botones);
    }
  );

  const botonTodos = document.getElementById('todos');
  const botonCompletados = document.getElementById('completados');
  const botonActivos = document.getElementById('activos');

  botonTodos.appendChild(t_todos);
  botonCompletados.appendChild(t_comple);
  botonActivos.appendChild(t_activos);

  /*
  botonTodos.onclick = () =>{
    alert("Si sirve!!");
  }
  */
fetch('https://raw.githubusercontent.com/samuelchvez/todos-fake-json-api/master/db.json')
  .then((respuesta) => respuesta.json())
  .then(function(data) {
    data.forEach(
      jsonData =>{
        if (lState.tareas.includes(jsonData.title) === false) {
          lState.tareas.push(jsonData.title);
        }
        
      }      
    )

    lState.tareas.forEach(
    tarea =>{
      const tareaBtn = document.createElement('button');
      tareaBtn.className = 'tarea';
      const t_boton = document.createTextNode(tarea);
      tareaBtn.appendChild(t_boton);
      despliegue.appendChild(tareaBtn);
    }
  )
  })
  .catch(function(error) {
    console.log(error);
  });

  btnAgregar.onclick = () => {
    if(divInput.value != 0){
      lState.tareas.push(divInput.value);

    if (root.hasChildNodes()) {
      root.innerHTML = null;
    }

    render(state);

    }
  }

  
}
//Llamamos funcion render
render(state);
