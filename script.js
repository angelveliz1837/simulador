document.addEventListener("DOMContentLoaded", function () {
    const inputOpcion = document.getElementById("opcion");
    const emulador = document.querySelector(".emulador");
    const ingresar = document.querySelector(".ingresar");

    const usuarioInput = document.querySelector(".ingresar_usuario_texto input");
    const contraseniaInput = document.querySelector(".ingresa_contrasenia_texto input");
    const ingresarSection = document.querySelector(".ingresar");
    const lineaSection = document.querySelector(".linea");
    const anadirSection = document.querySelector(".anadir");
    const anadirInput = document.querySelector(".anadir input");
    const usuarioEmulador = document.getElementById("usuarioemulador");

    const bt55Section = document.querySelector(".bt55");
    const bt55ResultadoSection = document.querySelector(".bt55_resultado");
    const documentoInput = document.querySelector(".bt55_documento input");

    const secciones = {
        "bt55": bt55Section,
        "mp12": document.querySelector(".mp12"),
        "pebp": document.querySelector(".pebp"),
        "kto1": document.querySelector(".kto1")
    };

    // Ocultar secciones al inicio
    ingresar.style.display = "none";
    lineaSection.style.display = "none"; 
    anadirSection.style.display = "none"; 
    bt55ResultadoSection.style.display = "none";

    // Evento para ingresar con "c"
    inputOpcion.addEventListener("keypress", function (event) {
        if (event.key === "Enter" && inputOpcion.value.toLowerCase() === "c") {
            emulador.style.display = "none"; 
            ingresar.style.display = "block"; 
        }
    });

    // Evento para validar usuario y contraseña
    contraseniaInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {  
            const usuarioValor = usuarioInput.value.trim();
            const usuarioRegex = /^XP\d{5}$/; 
            const contraseniaCorrecta = "bbva1234";

            if (usuarioRegex.test(usuarioValor) && contraseniaInput.value === contraseniaCorrecta) {
                usuarioEmulador.textContent = `USUARIO: ${usuarioValor}`;
                ingresarSection.style.display = "none"; 
                lineaSection.style.display = "block"; 
            } else {
                alert("Usuario o contraseña incorrectos. O debes iniciar con XP asi en mayuscula");
            }
        }
    });

    // Evento para pasar de línea a añadir
    document.addEventListener("keypress", function (event) {
        if (event.key === "Enter" && lineaSection.style.display === "block") {
            lineaSection.style.display = "none"; 
            anadirSection.style.display = "block"; 
        }
    });

    // Evento para seleccionar una sección con "bt55", "mp12", etc.
    anadirInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            const inputValor = anadirInput.value.trim().toLowerCase();

            if (secciones[inputValor]) {
                anadirSection.style.display = "none";
                secciones[inputValor].style.display = "block";
            } else {
                alert("Código no válido. Introduce bt55, mp12, pebp o kto1.");
            }
        }
    });

    // Evento para validar documento en bt55
    documentoInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {  
            const valorDocumento = documentoInput.value.trim();
            const regexDNI = /^l-\d{7,8}$/; 
            const regexPasaporte = /^e-\w+$/;

            if (regexDNI.test(valorDocumento) || regexPasaporte.test(valorDocumento)) {
                bt55Section.style.display = "none"; 
                bt55ResultadoSection.style.display = "block"; 
            } else {
                alert("Formato incorrecto. Introduce un DNI (l-XXXXXXX) o un Pasaporte (e-XXXXXXX).");
            }
        }
    });

    // Evento para retroceder con ALT + C
    document.addEventListener("keydown", function (event) {
        if (event.altKey && event.key.toLowerCase() === "c") {
            const seccionVisible = Object.values(secciones).find(sec => sec && sec.style.display === "block");

            if (seccionVisible || bt55ResultadoSection.style.display === "block") {
                if (seccionVisible) seccionVisible.style.display = "none";
                bt55ResultadoSection.style.display = "none";
                anadirSection.style.display = "block";
            }
        }
    });
});
