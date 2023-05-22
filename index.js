const pizzas = [
    {
      id: 1,
      nombre: "pizza de Muzzarella",
      precio: 500,
      ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
      imagen: "./imagenes/muzzarella.png",
    },
  
    {
      id: 2,
      nombre: "pizza de Cebolla",
      precio: 1500,
      ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
      imagen: "./imagenes/cebolla.png",
    },
  
    {
      id: 3,
      nombre: "pizza 4 Quesos",
      precio: 1380,
      ingredientes: [
        "Muzzarella",
        "Tomate",
        "Queso Azul",
        "Parmesano",
        "Roquefort",
      ],
      imagen: "./imagenes/4quesos.png",
    },
  
    {
      id: 4,
      nombre: "pizza Especial",
      precio: 1000,
      ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
      imagen: "./imagenes/especial.png",
    },
  
    {
      id: 5,
      nombre: "pizza con Anana",
      precio: 600,
      ingredientes: ["Muzzarella", "Tomate", "Anana"],
      imagen: "./imagenes/anana.png",
    },
  ];

  //COMIENZO DEL PROGRAMA

    const input = document.querySelector(".input");
    const formulario = document.querySelector(".add-form");
    const contenedorCards = document.getElementById("cont_cards")
    const div_message = document.getElementById("message")

    // FUNCION QUE RECUPERA DEL LOCAL STORAGE
    let lastID = JSON.parse(localStorage.getItem("id")) || "";
    
    // FUNCION QUE GUARDA EN LOCAL STORAGE

    const saveLocalStorage = (id) => {
        localStorage.setItem("id", JSON.stringify(id))
    }

     
//FUNCION PARA CORREGIR LOS DATOS DEL INPUT, QUITA ESPACION
const correctImput = () =>{
  return Number(input.value.trim().replace(/\s+/g, " "))
}


// BUSQUEDA DEL ID DE PIZZA 

const InfoPizzaToShow = (id) =>{
const arraypizzas = pizzas.find(pizza => pizza.id === id)
return arraypizzas; 
    }


//FUNCION QUE PREVIENE EL SUBMIT Y GUARDA EL VALOR

const sub = (e) =>{
e.preventDefault();
const ValueInput = correctImput()

IDisBetween()
saveLocalStorage(ValueInput)
createCard(InfoPizzaToShow(ValueInput))
console.log(typeof correctImput());
console.log(typeof ValueInput);
formulario.reset()
}


// FUNCION PARA VERIFICAR QUE EL RANGO ESTE ENTRE 1 Y 5

const IDisBetween = ()=> {
let value = true
if (correctImput() > 5) {
    contenedorCards.innerHTML = " "
    formulario.reset()
  div_message.innerHTML =
  
    `<div id="message">
      <h4  class="mensaje_error">INGRESE UN VALOR ENTRE 1 Y 5</h4>
      </div>`
      return false
     
} 
else {
   console.log(correctImput());
  div_message.innerHTML = ""
}

if (correctImput() < 1) {
 
  contenedorCards.innerHTML = " "
  formulario.reset()
  div_message.innerHTML =
  
    `<div id="message">
      <h4  class="mensaje_error">INGRESE UN VALOR ENTRE 1 Y 5</h4>
      </div>`
      
} 
else {

  console.log(correctImput());
  div_message.innerHTML = ""
}

}
//-------------------------------------------------^

//FUNCION PARA CREAR LA CARD CON LA INFO DE LA PIZZA

const createCard = (info) => {
  
  contenedorCards.innerHTML =

  `<div class="card_comida" id="card">
    <img src= "${info.imagen}" alt="">
    <div class="nombre_producto">
    <h4>${info.nombre.toUpperCase()}</h4>
    </div>
    <div class="desc">
    <h4>${info.ingredientes}</h4>
    </div>
  
    <div class="precio_boton">
    <h2>$${info.precio}</h2>
      
    </div>
    
  </div>`
}

  

//------------------------------------------------------------------------------

const mostrarUltimaPizza = () =>{

  if (lastID != 0) {
    createCard(InfoPizzaToShow(lastID))
  }

}
 
const init = () =>{

  window.addEventListener("load",mostrarUltimaPizza)
  formulario.addEventListener("submit", sub)
  
}

init()

