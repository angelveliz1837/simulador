function toggleComboBox() {
    const combo = document.getElementById("comboDocumento");
    const dniDiv = document.querySelector(".navegador_documento_extra_dni");

    if (combo.classList.contains("hidden")) {
        dniDiv.classList.add("hidden"); // Oculta el texto DNI
        combo.classList.remove("hidden"); // Muestra el combo
        combo.focus(); // Enfoca automáticamente
    } else {
        dniDiv.classList.remove("hidden"); // Muestra el texto DNI
        combo.classList.add("hidden"); // Oculta el combo
    }
}

function seleccionarDocumento() {
    const combo = document.getElementById("comboDocumento");
    const dniDiv = document.querySelector(".navegador_documento_extra_dni");

    dniDiv.textContent = combo.value; // Cambia el texto al seleccionado
    dniDiv.classList.remove("hidden"); // Muestra el texto
    combo.classList.add("hidden"); // Oculta el combo
}

/******************************************* */

function mostrarTematico() {
    const tematico = document.getElementById("tematico");

    // Alternar visibilidad del elemento
    if (tematico.style.display === "none" || tematico.style.display === "") {
        tematico.style.display = "block"; // Muestra el elemento
    } else {
        tematico.style.display = "none"; // Oculta el elemento
    }
}

/********************************* */
function toggleContenido() {
    const contenido = document.querySelector('.digitales');
    
    // Alternar la visibilidad del contenido
    if (contenido.style.display === "none" || contenido.style.display === "") {
        contenido.style.display = "block"; // Muestra el contenido
    } else {
        contenido.style.display = "none"; // Oculta el contenido
    }
}

/********************************* */
function mostrarOpciones() {
    const opciones = document.querySelectorAll('.detalles, .bloqueos, .movimientos');

    // Alternar la visibilidad de las opciones
    opciones.forEach(opcion => {
        if (opcion.style.display === "none" || opcion.style.display === "") {
            opcion.style.display = "block"; // Muestra las opciones
        } else {
            opcion.style.display = "none"; // Oculta las opciones
        }
    });
}

/********************************* */
function mostrarDetalle() {
    const cajaCredito = document.getElementById("cajas_caja_credito");
    const opcion1 = document.querySelectorAll('.detalles');
    const opcion2 = document.querySelectorAll('.bloqueos');
    const opcion3 = document.querySelectorAll('.movimientos');

    // Alternar entre mostrar y ocultar el contenido con display: grid
    if (cajaCredito.style.display === "none" || cajaCredito.style.display === "") {
        cajaCredito.style.display = "grid";  // Muestra el contenido como una cuadrícula
        
        // Ocultar las otras opciones
        opcion1.forEach(opcion => {
            opcion.style.display = "none"; // Ocultar Detalles
        });

        opcion2.forEach(opcion => {
            opcion.style.display = "none"; // Ocultar Bloqueos
        });

        opcion3.forEach(opcion => {
            opcion.style.display = "none"; // Ocultar Movimientos
        });
    } else {
        cajaCredito.style.display = "none";  // Ocultar el contenido
    }
}

function mostrarBloqueo() {
    const cajaBloqueo = document.getElementById("cajas_caja_bloqueo");
    const opcion1 = document.querySelectorAll('.detalles');
    const opcion2 = document.querySelectorAll('.bloqueos');
    const opcion3 = document.querySelectorAll('.movimientos');

    // Alternar entre mostrar y ocultar el contenido con display: grid
    if (cajaBloqueo.style.display === "none" || cajaBloqueo.style.display === "") {
        cajaBloqueo.style.display = "grid";  // Muestra el contenido como una cuadrícula
        
        // Ocultar las otras opciones
        opcion1.forEach(opcion => {
            opcion.style.display = "none"; // Ocultar Detalles
        });

        opcion2.forEach(opcion => {
            opcion.style.display = "none"; // Ocultar Bloqueos
        });

        opcion3.forEach(opcion => {
            opcion.style.display = "none"; // Ocultar Movimientos
        });
    } else {
        cajaBloqueo.style.display = "none";  // Ocultar el contenido
    }
}


/**************************************** */

// Variable para controlar si la lista de bloqueos está visible o no
let listaVisible = false;

function toggleLista() {
    const listaBloqueos = document.querySelector('.lista_bloqueos');
    
    // Alternar visibilidad de la lista
    if (listaVisible) {
        listaBloqueos.style.display = "none";  // Ocultar la lista
    } else {
        listaBloqueos.style.display = "block";  // Mostrar la lista
    }

    // Cambiar el estado de visibilidad
    listaVisible = !listaVisible;
}

/*********************************** */

let opcionSeleccionada = null;  // Variable para almacenar la opción seleccionada

function seleccionarOpcion(element) {
    // Mostrar la opción seleccionada
    const seleccionBloqueo = document.querySelector('.seleccion_bloqueo');
    seleccionBloqueo.textContent = element.textContent;

    // Cambiar la clase de la opción seleccionada
    const opciones = document.querySelectorAll('.lista_bloqueos div');
    opciones.forEach(op => op.classList.remove('seleccionada')); // Eliminar la clase de todas las opciones
    element.classList.add('seleccionada'); // Añadir la clase de seleccionada a la opción clickeada

    // Ocultar la lista después de hacer una selección
    document.querySelector('.lista_bloqueos').style.display = "none";
    
    // Restablecer el estado de visibilidad
    listaVisible = false;

    // Almacenar la opción seleccionada
    opcionSeleccionada = element.textContent;
}

/*********************************** */

function toggleCheck() {
    const checkIcon = document.getElementById("checkIcon");
    
    // Cambiar la imagen según el estado actual
    if (checkIcon.src.includes("icono_sincheck.png")) {
        checkIcon.src = "image/icono_concheck.png";  // Cambiar a la imagen con check
    } else {
        checkIcon.src = "image/icono_sincheck.png";  // Cambiar a la imagen sin check
    }
}

/*********************************** */

// Función para el botón "Bloquear"
function bloquear() {
    if (opcionSeleccionada) {
        // Si hay una opción seleccionada, ocultamos .cajas_caja_bloqueo y mostramos .cajas_caja_correo
        document.querySelector('.cajas_caja_bloqueo').style.display = 'none';
        document.querySelector('.cajas_caja_correo').style.display = 'block';
    } else {
        alert('Por favor, selecciona una razón de bloqueo primero.');
    }
}

/************************************* */

// Función para mostrar/ocultar la sección de autenticación
// Función para mostrar la sección de Autenticar
function mostrarAutenticar() {
        const autenticar = document.querySelector('.autenticar');
        // Alternar visibilidad de la sección .autenticar
        if (autenticar.style.display === "none" || autenticar.style.display === "") {
            autenticar.style.display = "flex";  // Mostrar con display flex para centrar el contenido
        } else {
            autenticar.style.display = "none";  // Ocultar
        }
    }

    function cerrarAutenticar() {
        const autenticar = document.querySelector('.autenticar');
        autenticar.style.display = "none";  // Ocultar la tarjeta
    }

    // Función para mostrar la sección de Tarjeta
    function mostrarTarjeta() {
        const tarjeta = document.querySelector('.tarjeta');
        tarjeta.style.display = "flex";  // Mostrar la tarjeta
    }

    // Función para mostrar la sección Pregunta
    function mostrarPregunta() {
        const pregunta = document.querySelector('.pregunta');
        pregunta.style.display = "flex";  // Mostrar la sección pregunta
    }

    // Función para cerrar la tarjeta
    function cerrarTarjeta() {
        const tarjeta = document.querySelector('.tarjeta');
        tarjeta.style.display = "none";  // Ocultar la tarjeta
    }

    function cerrarPregunta() {
        const pregunta = document.querySelector('.pregunta');
        pregunta.style.display = "none";  // Ocultar la sección pregunta
    }

    // Función para validar y cerrar la tarjeta cuando se hace clic en Validar
    function validarTarjeta() {
        const tarjeta = document.querySelector('.tarjeta');
        tarjeta.style.display = "none";  // Ocultar la tarjeta
        const autenticar = document.querySelector('.autenticar');
        autenticar.style.display = "none";  // Ocultar la tarjeta
    }

    function validarAutenticar() {
        const pregunta = document.querySelector('.pregunta');
        pregunta.style.display = "none";  // Ocultar la sección pregunta
        const autenticar = document.querySelector('.autenticar');
        autenticar.style.display = "none";  // Ocultar la sección autenticar
    }


/****************** FUNCIONES DE VALIDACIÓN Y CIERRE*/

// Función para cerrar la sección acepbloqueo
function cerrarBloqueo() {
    const acepbloqueo = document.querySelector('.acepbloqueo');
    if (acepbloqueo) acepbloqueo.style.display = "none";
}

// Función para mostrar la sección bloqueo
function validarBloqueo() {
    const seleccion = document.querySelector('.seleccion_bloqueo').textContent.trim();
    if (seleccion !== "RAZÓN DE BLOQUEO") {
        const bloqueo = document.querySelector('.acepbloqueo');
        if (bloqueo) bloqueo.style.display = "flex";
    } else {
        alert("Debes seleccionar una razón de bloqueo antes de continuar.");
    }
}

// Función para mostrar la opción afirmativa en bloqueo
function validarBloqueoSi() {
    const bloqueoSi = document.querySelector('.cajas_caja_correo');
    if (bloqueoSi) bloqueoSi.style.display = "block";
    const bloqueo = document.querySelector('.acepbloqueo');
    if (bloqueo) bloqueo.style.display = "none";
    const bloqueoCaja = document.querySelector('.cajas_caja_bloqueo');
    if (bloqueoCaja) bloqueoCaja.style.display = "none";
}

// Función para ocultar la sección acepbloqueo al negar bloqueo
function validarBloqueoNo() {
    const bloqueoNo = document.querySelector('.acepbloqueo');
    if (bloqueoNo) bloqueoNo.style.display = "none";
}

// Función para cerrar la sección confirmación
function cerrarConfirmacion() {
    const confirmacion = document.querySelector('.confirmacion');
    if (confirmacion) confirmacion.style.display = "none";
}

// Función para mostrar la sección confirmación
function validarEnvio() {
    const confirmacion = document.querySelector('.confirmacion');
    if (confirmacion) confirmacion.style.display = "flex";
}

// Función para alternar la autenticación
function mostrarAutenticar() {
    const autenticar = document.querySelector('.autenticar');
    if (autenticar) autenticar.style.display = "flex";
}

// Función para cerrar autenticación
function cerrarAutenticar() {
    const autenticar = document.querySelector('.autenticar');
    if (autenticar) autenticar.style.display = "none";
}

// Función para mostrar la tarjeta
function mostrarTarjeta() {
    const tarjeta = document.querySelector('.tarjeta');
    if (tarjeta) tarjeta.style.display = "flex";
}

// Función para cerrar la tarjeta
function cerrarTarjeta() {
    const tarjeta = document.querySelector('.tarjeta');
    if (tarjeta) tarjeta.style.display = "none";
}

// Función para mostrar la pregunta
function mostrarPregunta() {
    const pregunta = document.querySelector('.pregunta');
    if (pregunta) pregunta.style.display = "flex";
}

// Función para cerrar la pregunta
function cerrarPregunta() {
    const pregunta = document.querySelector('.pregunta');
    if (pregunta) pregunta.style.display = "none";
}

// Función para validar autenticación y ocultar pregunta/autenticación
function validarAutenticar() {
    const pregunta = document.querySelector('.pregunta');
    if (pregunta) pregunta.style.display = "none";

    const autenticar = document.querySelector('.autenticar');
    if (autenticar) autenticar.style.display = "none";
}

// Función para validar tarjeta y ocultarla junto con autenticación
function validarTarjeta() {
    const tarjeta = document.querySelector('.tarjeta');
    if (tarjeta) tarjeta.style.display = "none";

    const autenticar = document.querySelector('.autenticar');
    if (autenticar) autenticar.style.display = "none";
}

/****************** ASIGNACIÓN DE EVENTOS ******************/

document.querySelector('.acepbloqueo_contenido_texto_boton_negacion_no')?.addEventListener('click', validarBloqueoNo);
document.querySelector('.acepbloqueo_contenido_texto_boton_afirmacion_si')?.addEventListener('click', validarBloqueoSi);
document.querySelector('.cajas_caja_bloqueo_boton_bloquear')?.addEventListener('click', validarBloqueo);
document.querySelector('.navegador_candado')?.addEventListener('click', mostrarAutenticar);
document.querySelector('.autenticar_detalle_cerrar')?.addEventListener('click', cerrarAutenticar);
document.querySelector('.autenticar_detalle_opcion_flujo')?.addEventListener('click', mostrarTarjeta);
document.querySelector('.autenticar_detalle_opcion_pregunta')?.addEventListener('click', mostrarPregunta);
document.querySelector('.tarjeta_opcion_cerrar')?.addEventListener('click', cerrarTarjeta);
document.querySelector('.tarjeta_opcion_detalle_texto_boton_validar')?.addEventListener('click', validarTarjeta);
document.querySelector('.pregunta_contenido_titulo_cerrar')?.addEventListener('click', cerrarPregunta);
document.querySelector('.pregunta_contenido_detalle_boton_negacion_no')?.addEventListener('click', cerrarPregunta);
document.querySelector('.pregunta_contenido_detalle_boton_autenticar_si')?.addEventListener('click', validarAutenticar);
document.querySelector('.confirmacion_contenido_dato_icono')?.addEventListener('click', cerrarConfirmacion);
document.querySelector('.cajas_caja_correo_envio_contenido_boton_enviar')?.addEventListener('click', validarEnvio);
document.querySelector('.acepbloqueo_contenido_cerrar')?.addEventListener('click', cerrarBloqueo);

function seleccionarOpcion(element) {
    document.querySelector('.seleccion_bloqueo').textContent = element.textContent;
    document.querySelector('.lista_bloqueos').style.display = "none"; // Oculta la lista después de la selección
}

function toggleLista() {
    const lista = document.querySelector('.lista_bloqueos');
    lista.style.display = lista.style.display === "none" || lista.style.display === "" ? "block" : "none";
}

/************************************* */

// Seleccionar todos los iconos con la clase 'iconoImagen'
const iconos = document.querySelectorAll('.iconoImagen');

// Agregar un evento de clic a cada imagen de los iconos
iconos.forEach(icono => {
    icono.addEventListener('click', () => {
        // Cuando un icono es clickeado, primero se restablecen todos a 'abierto'
        iconos.forEach(otherIcono => {
            otherIcono.src = 'image/icono_abierto.png';  // Establecer la imagen como abierta
        });
        
        // Cambiar la imagen del icono clickeado a 'cerrado'
        icono.src = 'image/icono_cerrado.png';  // Establecer la imagen como cerrada
    });
});

