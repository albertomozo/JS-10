/*
id: 1,
nombre: 'Patata',
precio: 1,
imagen: 'patata.jpg'
*/
const manuales  = {
    materias : [
        {
            "id" : 1,
            "materia" : "HTML",
            "nombre" : "HTML Básico",
            "url" : 'https://docs.google.com/presentation/d/1KfPKrD9dmRxfIlOQ9hdRaeayiibZQ7jZJXq_qWlHOTA/edit?usp=sharing',
            "imagen" : "html.svg",
            "categoria" : "1",
            "tipo" : 'drive',
            "precio" : 10
        },
        {
            "id" : 2,
            "materia" : "JS",
            "nombre" : "JS básico",
            "url" : 'https://docs.google.com/presentation/d/1rTIUbxueAOxUOdXNKrYtGgCswSCpzSENOLpReap8E5A/edit?usp=sharing',
            "imagen" : "js.svg",
            "categoria" : "1",
            "precio" : 15
        },
        {
            "id" : 3,
            "nombre" : "SASS 1",
            "materia" : "SASS",
            "url" : 'https://docs.google.com/presentation/d/1Lr8MJz9VN-TjAu0dqOe5RsJiwO0VYG60XxWZGZLq7oo/edit?usp=sharing',
            "imagen" : "sass.svg",
            "categoria" : "1"
        },
        {
            "id" : 4,
            "nombre" : "PHP 1",
            "materia" : "PHP",
            "url" : 'https://docs.google.com/presentation/d/13540h_unETM2xycZFKPBPPfpwRo9UO1vdqnS2zi4gUo/edit?usp=sharing',
            "imagen" : "php.svg",
            "categoria" : "2",
            "precio" : 17

        },
        {
            "id" : 5,
            "nombre" : "GIT 1",
            "materia" : "GIT",
            "url" : 'https://docs.google.com/presentation/d/1v8LjvzaJVrzTUrp3jUhqi79V3jjB4E90blN_RDNsxIo/edit?usp=sharing',
            "imagen" : "Git_logo_PNG2.png",
            "categoria" : "3",
            "precio" : 21
        },
        {
            "id" : 6,
            "nombre" : "SUBVERSION , GIT",
            "materia" : "Control de Versiones",
            "url" : 'https://docs.google.com/presentation/d/1v8LjvzaJVrzTUrp3jUhqi79V3jjB4E90blN_RDNsxIo/edit?usp=sharing',
            "imagen" : "Git_logo_PNG2.png",
            "categoria" : "3",
            "precio" : 21
        }



    ]
    
};

const baseDeDatos = manuales.materias;

const categorias = {
    categoria : [
        {
            id : 1,
            nombre : "FrontEnd",
            icono :""
        },
        {
            id : 2,
            nombre : "Back",
            icono :""
        },
        {
            id : 3,
            nombre : "Herramientas",
            icono :""
        },
        {
            id : 5,
            nombre : "Ofimática",
            icono :""
        }
    ]
}
/* incializacón de variables */
let materias = manuales.materias;  // array con las materias 
let categoriasLista = categorias.categoria; // array con las categorias

/* construccion de la botonera de categorias */
console.log(categorias);
let categoriasHtml = '<ul>';
for (let i=0;i<categoriasLista.length;i++){
    let categoria = categoriasLista[i];
    categoriasHtml += `<li id="btn_${categoria.nombre}" class="cate"><a href="index.html?categoriaid=${categoria.id}">${categoria.nombre}</a></li>` ;
}
categoriasHtml += '<li id="btn_Todos" class="cate">Todos</li>';
categoriasHtml += '</ul>';
/* construccion de la lista de materias */


/* asignacion de codigo a sus capas DIV */
document.querySelector('#categorias').innerHTML = categoriasHtml;
document.getElementById("contenido").innerHTML= materiasHtml;


/*LISTENERS */

let btnCategorias= document.querySelectorAll('#categorias');
for (let i=0;i<btnCategorias.length;i++){
        btnCategorias[i].addEventListener('click',(e)=>{
        e.preventDefault();
        cate = e.target.innerText;
        cat = '.'+e.target.innerText;
        cateid = '#btn_'+e.target.innerText;

      /*   console.log('cateid ' + cateid + ' ' + document.querySelector(`${cateid}`));
        console.log(document.querySelector('#btn_Todos')); */
        // poner fondo y color mediante estylos
    /*     document.querySelector(`${cateid}`).style.background='blue';
        document.querySelector(`${cateid}`).style.color='white'; */
        // poner fondo y color mediante clase css activa
        console.log(document.querySelector(`${cateid}`));
        document.querySelectorAll('.cate').forEach((element)=>{
            element.classList.remove('active');
        })   
        document.querySelector(`${cateid}`).classList.add('active');
        //document.querySelector(cateid).style.color='white';

        //alert(cat);
        if (cat == '.Todos'){
            materias =document.querySelectorAll('.materias');
            materias.forEach(function (element) {
                console.log(element);
                element.style.visibility = 'visible';
            });
        } else {
            /* quitamos visibilidad a todos los elementos de contenido */
            materias =document.querySelectorAll('.materias');
            materias.forEach(function (element) {
                console.log(element);
                element.style.visibility = 'hidden';
            });
            materiasVisibles = document.querySelectorAll(cat);
            console.log(materiasVisibles);
            materiasVisibles.forEach(function (element) {
                console.log(element);
                element.style.visibility = 'visible';
            });
        }
    })
}
