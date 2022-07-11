
      
let input = document.querySelector('.input');
let agregar = document.querySelector('.boton-agregar');
let container = document.querySelector('.container');
let lock = document.querySelectorAll('.botonEditar')



//creando clase
class Item {
  constructor(nuevaTarea){
    this.crearDiv(nuevaTarea);
  }
  crearDiv(tarea) {
    //agregar div
    const divnuevo = document.createElement('div')
    //atributo del div
    divnuevo.classList.add('new-div')

    //atributo del input
    const createInput = document.createElement('input');
    createInput.setAttribute('type', 'text');
    createInput.setAttribute('disabled', 'true');
    createInput.classList.add('item-input');
    createInput.value = tarea;
    divnuevo.appendChild(createInput);
    container.appendChild(divnuevo);
  
    const botonEditar = document.createElement('botonEditar');
    botonEditar.classList.add('botonEditar');
    botonEditar.innerHTML = '<i class="fa-solid fa-lock"></i>';
    divnuevo.appendChild(botonEditar);
    container.appendChild(divnuevo);
    //evento//
    botonEditar.addEventListener('click',function () {
    if(botonEditar.innerHTML === '<i class="fa-solid fa-lock"></i>'){
      botonEditar.innerHTML = '<i class="fas fa-lock-open"></i>';  
      createInput.removeAttribute('disabled')
    } else {
     botonEditar.innerHTML = '<i class="fa-solid fa-lock"></i>'
     createInput.setAttribute('disabled','true')
    }
    })
  
  
    const botonRemover = document.createElement('botonRemover');
    botonRemover.classList.add('botonRemover');
    botonRemover.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    divnuevo.appendChild(botonRemover);
    container.appendChild(divnuevo);
    botonRemover.addEventListener('click',function () {
      this.parentNode.remove ()
    })
  
  }
}

agregar.addEventListener('click', function () {
  if (input.value === ('')) {
  } else {
    let x = new Item(input.value)
    input.value = ''
  }
}) 

//chequear tarea parte 6//
function chequearInput() {
  if (input.value.trim() === ('')) {
//alert('Agregue una tarea a la lista')
Swal.fire('¡Agregar una tarea a la lista!')
  } else {
    saveTask(input.value)
    let x = new Item(input.value) 
    input.value = ''
  }
}

input.addEventListener('keyup', function (e) {
  if (e.keyCode === 13) {
    chequearInput()
  }
});