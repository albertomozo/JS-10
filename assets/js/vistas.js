
/* incializacón de variables */
let materias = manuales.materias;  // array con las materias 
let categoriasLista = categorias.categoria; // array con las categorias





/* visualizacion de categorias en section */

function verCategorias() {
    let categoriasHtml = '<section id="seccion-categorias">';
    for (let i = 0; i < categoriasLista.length; i++) {
        let categoria = categoriasLista[i];
        categoriasHtml += `<article class="item-categoria"><h2 id="btn_${categoria.nombre}" class="cate"><a href="index.html?categoriaid=${categoria.id}">${categoria.nombre} - ${categoria.id} <img src="./${categoria.icono}"></a></h2>
        <p>${categoria.descripcion}</p>
        </article>` ;
    }
    categoriasHtml += '<articleclass="item-categoria"><h2>Todos</h2></article>';
    categoriasHtml += '</section>';
    return categoriasHtml;

}

function botoneraCategorias() {
    /* incializacón de variables */
    // array con las materias 
    let categoriasLista = categorias.categoria; // array con las categorias


    /* construccion de la botonera de categorias */
    console.log(categorias);
    let categoriasHtml = '<ul>';
    for (let i = 0; i < categoriasLista.length; i++) {
        let categoria = categoriasLista[i];
        categoriasHtml += `<li id="btn_${categoria.nombre}" class="cate"><img src="${categoria.icono}" width="30px">${categoria.nombre}</li>`;
    }
    categoriasHtml += '<li id="btn_Todos" class="cate">Todos</li>';
    categoriasHtml += '</ul>';
    return categoriasHtml;

}

function categoriaActivar(categoriaid) {
    console.log(categoriasLista);
    cateid = '#btn_' + categoriasLista[categoriaid - 1].nombre;
    console.log(cateid);
    cat = `.${categoriasLista[categoriaid - 1].nombre}`

    console.log(document.querySelector(`${cateid}`));
    document.querySelectorAll('.cate').forEach((element) => {
        element.classList.remove('active');
    })
    document.querySelector(`${cateid}`).classList.add('active');
    //document.querySelector(cateid).style.color='white';

    //alert(cat);
    if (cat == '.Todos') {
        materias = document.querySelectorAll('.materias');
        materias.forEach(function (element) {
            console.log(element);
            element.style.visibility = 'visible';
        });
    } else {
        /* quitamos visibilidad a todos los elementos de contenido */
        materias = document.querySelectorAll('.materias');
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
}

function categoriasListeners() {
    let btnCategorias = document.querySelectorAll('#categorias');
    for (let i = 0; i < btnCategorias.length; i++) {
        btnCategorias[i].addEventListener('click', (e) => {
            e.preventDefault();
            cate = e.target.innerText;
            cat = '.' + e.target.innerText;
            cateid = '#btn_' + e.target.innerText;

            /*   console.log('cateid ' + cateid + ' ' + document.querySelector(`${cateid}`));
                console.log(document.querySelector('#btn_Todos')); */
            // poner fondo y color mediante estylos
            /*     document.querySelector(`${cateid}`).style.background='blue';
                document.querySelector(`${cateid}`).style.color='white'; */
            // poner fondo y color mediante clase css activa
            console.log(document.querySelector(`${cateid}`));
            document.querySelectorAll('.cate').forEach((element) => {
                element.classList.remove('active');
            })
            document.querySelector(`${cateid}`).classList.add('active');
            //document.querySelector(cateid).style.color='white';

            //alert(cat);
            if (cat == '.Todos') {
                materias = document.querySelectorAll('.materias');
                materias.forEach(function (element) {
                    console.log(element);
                    element.style.visibility = 'visible';
                });
            } else {
                /* quitamos visibilidad a todos los elementos de contenido */
                materias = document.querySelectorAll('.materias');
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


}

function seccionMaterias() {
    /* construccion de la lista de materias */
    //console.log(materias)
    let materiasHtml = '';
    for (let i = 0; i < materias.length; i++) {
        let materia = materias[i];
        let categoriaClas;
        let indice = parseInt(materia.categoria) - 1;  // para coger bien los indices 
        /*  console.log(indice);
            console.log(categoriasLista[indice].nombre); */
        categoriaClas = categoriasLista[indice].nombre;
        console.log('tipo ' + materia.tipo);
        switch (materia.tipo) {
            case 'drive':
                tipoT = 'googledrive.svg';
                break;
            default:
                tipoT = 'icons8-bloc-50.png';
        }
        materiasHtml += `<article id="${materia.materia}" class="materias ${categoriaClas}">
        <h3>${materia.nombre}</h3>
        <p><img src="../assets/img/${tipoT}" width="30px">
        <a href="${materia.url}" target="_blank">enlace</a>
        </p>
        <div >
        <img src="assets/img/${materia.imagen}" class="w100por">
        </div>
        <div class="page-wrapper">
            <button id="addtocart" onclick="anyadirProductoAlCarrito(${materia.id})" class="iden-${materia.id}">Comprar<span class="cart-item"></span></button>

        </div>
        </article>`
    }

    return materiasHtml;
}








/* console.log(categorias);

let categoriasHtml = '';


for (let i=0;i<categoriasLista.length;i++){
    let categoria = categoriasLista[i];
    categoriasHtml += `<p id="btn_${categoria.nombre}" class="cate"><a href="index.html?categoriaid=${categoria.id}">${categoria.nombre} - ${categoria.id} <img src="./${categoria.icono}"></a></p>` ;
}
categoriasHtml += '<p>Todos</p>';
categoriasHtml += ''; */
/* construccion de la lista de materias */


/* asignacion de codigo a sus capas DIV */
/*  */


