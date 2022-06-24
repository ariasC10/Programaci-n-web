// Código para el menú despleglable
// Carga todas las variables necesarias en contexto global
let menu = document.querySelector('.opciones ul'); //Contenedor con las opciones - cambiar
let abrir = document.querySelector('.icon_abrir');//Icono para desplegar el menú
let cerrar = document.querySelector('.icon_cerrar');//Icono para desplegar el menú
let cerrar_mouse = document.getElementById('opciones_menu_hide')

//  Se asigna un evento a los dos botones con la función que corresponda
abrir.addEventListener('click', abrirMenu);
cerrar.addEventListener('click', cerrarMenu);
cerrar_mouse.addEventListener('mouseleave', cerrarOpcionesMenu);
//Intercambia los valores establecidos en la stylesheet para poder
// abrir el menu
function abrirMenu() {
    abrir.style.display = 'none';
    cerrar.style.display = 'block';
    if(menu) {
        menu.style.top = '0px';
    }
}
// Revierte los cambios cuando se haga clic en el botón cerrar
function cerrarMenu() {
    abrir.style.display = 'block';
    cerrar.style.display = 'none';
    if(menu) {
        menu.style.top = '-100%';
    }
}

// Cierra la lista de opciones con la opción mouseleave
function cerrarOpcionesMenu() {
    abrir.style.display = 'block';
    cerrar.style.display = 'none';
    if(menu) {
        menu.style.top = '-100%';
    }
}



//Pop-up Info general de asignatura
const open_asig = document.getElementById('btn-asig')
const pop_up_asig = document.getElementById('pop_up_info_asig')
const close_asig = document.getElementById('Close_Overlay')
//Añadimos un evento de click a la variable para mostrar el pop up
open_asig.addEventListener('click', () => {
    pop_up_info_asig.classList.add('show')
});
//Añadimos un evento de click a la variable para cerrar el pop up
close_asig.addEventListener('click', () => {
    pop_up_info_asig.classList.remove('show')
});


//Pop-up Info general de asignatura
const open_save = document.getElementById('id_save')
const pop_up_save = document.getElementById('pop_up_save')
const acept_save = document.getElementById('btn_guardar')
const cancel_save = document.getElementById('btn_cancelar')

//Añadimos un evento de click a la variable para mostrar el pop up
open_save.addEventListener('click', () => {
    pop_up_save.classList.add('show')
});
//Añadimos un evento de click a la variable para cerrar el pop up
acept_save.addEventListener('click', () => {
    pop_up_save.classList.remove('show')
});
//Añadimos un evento de click a la variable para cerrar el pop up
cancel_save.addEventListener('click', () => {
    pop_up_save.classList.remove('show')
});


//Pop-up Info general de asignatura
const open_repo_plan = document.getElementById('id_planeaciones')
const pop_up_repo_plan = document.getElementById('pop_up_upload_plan')
const acept_repo_plan = document.getElementById('btn_guardar_plan')
const cancel_repo_plan = document.getElementById('btn_cancelar_plan')

//Añadimos un evento de click a la variable para mostrar el pop up
open_repo_plan.addEventListener('click', () => {
    pop_up_repo_plan.classList.add('show')
});
//Añadimos un evento de click a la variable para cerrar el pop up
acept_repo_plan.addEventListener('click', () => {
    pop_up_repo_plan.classList.remove('show')

});
//Añadimos un evento de click a la variable para cerrar el pop up
cancel_repo_plan.addEventListener('click', () => {
    pop_up_repo_plan.classList.remove('show')
});

//Función para abrir un pdf
function openPDF(){
    window.open("C:/Users/AriasC/Documents/ITCH/Arias/6to semestre/Proyecto Blockchain/Cursos/Programación web/Proyecto Sistema-HTML/pdf-prueba.pdf")
}

//funcion para exportar a pdf
function pdfExport(){
    
    //labels
    var label_tema1 = document.getElementById('tema1_evalF').innerText,
        label_tema2 = document.getElementById('tema2_evalF').innerText,
        label_tema3 = document.getElementById('tema3_evalF').innerText,
        label_tema4 = document.getElementById('tema4_evalF').innerText;

    //textarea
    var text_area1 = document.getElementById('txarea_1').value;
    var text_area2 = document.getElementById('txarea_2').value;
    var text_area3 = document.getElementById('txarea_3').value;
    var text_area4 = document.getElementById('txarea_4').value;
    //prueba formato
    var sep_1 = ': ';
    var sep_2 = ': ';
    var sep_3 = ': ';
    var sep_4 = ': ';


    //librería jspdf
    var doc = new jsPDF();
    doc.setFontSize(18);
    doc.text(70, 20, 'Evaluaciones formativas:');

    doc.setFontSize(12);
    doc.text(label_tema1 + sep_1 + text_area1, 10, 40);
    doc.text(label_tema2 + sep_2 + text_area2, 10, 60);
    doc.text(label_tema3 + sep_3 + text_area3, 10, 80);
    doc.text(label_tema4 + sep_4 + text_area4, 10, 100);
    doc.save('Prueba.pdf')
}

//Pop-up Info general de asignatura
const open_temas_act = document.getElementById('abrir_temas')
const pop_up_cont_tema = document.getElementById('pop_up_cont_tema')
const close_temas_act = document.getElementById('close_overlay_temas')
//Añadimos un evento de click a la variable para mostrar el pop up
open_temas_act.addEventListener('click', () => {
    pop_up_cont_tema.classList.add('show')
});
//Añadimos un evento de click a la variable para cerrar el pop up
close_temas_act.addEventListener('click', () => {
    pop_up_cont_tema.classList.remove('show')
});


//Código para el menú oculto del último mediaquerie
// Carga todas las variables necesarias en contexto global
let navMenu = document.querySelector('.nav_menu'); //Contenedor con las opciones - cambiar
let abrirToggle = document.querySelector('.toggle');//Icono para desplegar el menú


//  Se asigna un evento a los dos botones con la función que corresponda
abrirToggle.addEventListener('click', desplegarMenu);

//Intercambia los valores establecidos en la stylesheet para poder
// abrir el menu
function desplegarMenu() {
    if(navMenu) {
        navMenu.classList.toggle('nav_menu_visible')
    }
}


//Pop-up Crear paquete
const crear_paquete = document.getElementById('crear_paquete')
const pop_up_crear_paquete = document.getElementById('pop_up_crear_paquete')
const cerrar_vent_paq = document.getElementById('close_overlay_paquetes')
//Añadimos un evento de click a la variable para mostrar el pop up
crear_paquete.addEventListener('click', () => {
    pop_up_crear_paquete.classList.add('show')
});
//Añadimos un evento de click a la variable para cerrar el pop up
cerrar_vent_paq.addEventListener('click', () => {
    pop_up_crear_paquete.classList.remove('show')
});



//Métodos para cambiar el color de los botones para crear paquete
// Carga todas las variables necesarias en contexto global
let cambiar_color1 = document.querySelector('.btn_tema1'); 
let cambiar_color2 = document.querySelector('.btn_tema2');
let cambiar_color3 = document.querySelector('.btn_tema3');
let cambiar_color4 = document.querySelector('.btn_tema4');

//  Se asigna un evento a los dos botones con la función que corresponda
cambiar_color1.addEventListener('click', botonColor1);
cambiar_color2.addEventListener('click', botonColor2);
cambiar_color3.addEventListener('click', botonColor3);
cambiar_color4.addEventListener('click', botonColor4);

//Intercambia los valores establecidos en la stylesheet para poder
// cambiar de color los botones
function botonColor1() {
    if(cambiar_color1) {
        cambiar_color1.style.background = '#29588E';
        cambiar_color1.style.color = '#fff';
    }
}

function botonColor2() {
    if(cambiar_color2) {
        cambiar_color2.style.background = '#29588E';
        cambiar_color2.style.color = '#fff';
    }
}

function botonColor3() {
    if(cambiar_color3) {
        cambiar_color3.style.background = '#29588E';
        cambiar_color3.style.color = '#fff';
    }
}

function botonColor4() {
    if(cambiar_color4) {
        cambiar_color4.style.background = '#29588E';
        cambiar_color4.style.color = '#fff';
    }
}