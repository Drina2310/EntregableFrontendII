/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */ 
  datosPersona.nombre = prompt('Ingresa tu nombre');
  const edad = parseInt(prompt('Ingresa el año en que naciste'));
 
  const calcularEdad = () =>{
    if ( isNaN(edad) ) {
      alert('Debe ingresar un año correcto, ejemplo: 1990')
    } else {
      anios = 2022 - edad;
    }
    return anios;
  } 

  datosPersona.edad = calcularEdad();
  datosPersona.ciudad = prompt('Ingresa la ciudad donde vives');
 
  const javaScript = confirm('¿Te interesa JavaScript?');
  const interesPorJs = javaScript ? "Sí" : "No";
  datosPersona.interesPorJs = interesPorJs;  
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  const spanNombre = document.getElementById("nombre");
  spanNombre.innerHTML =  capitalizar(datosPersona.nombre);;

  const spaEdad = document.getElementById("edad");
  spaEdad.innerHTML = datosPersona.edad;

  const spanCiudad = document.getElementById("ciudad");
  spanCiudad.innerHTML = capitalizar(datosPersona.ciudad);

  const spanJavaScript = document.getElementById("javascript");
  spanJavaScript.innerHTML = datosPersona.interesPorJs; 
  
  function capitalizar(cadena) {
    return cadena[0].toUpperCase() + cadena.slice(1);
  }
}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const fila = document.getElementById("fila");

  for (let i of listado) {
    fila.innerHTML += `<div class="caja">
    <img src="${i.imgUrl}" alt="${i.lenguajes}">
    <p class="lenguajes">${i.lenguajes}</p>
    <p class="bimestre">${i.bimestre}</p>
  </div>`;
  }

  materiasBtn.removeEventListener("click", recorrerListadoYRenderizarTarjetas);  
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  document.getElementById("sitio").classList.toggle("dark");
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
window.addEventListener("keypress", function(e) {
  console.log(e.key);
  if(e.key == "f" || e.key == "F") {
    document.querySelector("#sobre-mi").classList.remove("oculto");
  }
})
