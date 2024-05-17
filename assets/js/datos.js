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
            "categoria" : "1",
            "precio" : 13
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
            icono :"assets/img/categorias/front.svg",
            descripcion : "Diseño visual, incluyendo animaciones "
        },
        {
            id : 2,
            nombre : "Back",
            icono :"assets/img/categorias/back.svg",
            descripcion : "Datos, programación ene el servidor"
        },
        {
            id : 3,
            nombre : "Herramientas",
            icono :"assets/img/categorias/herramientas.svg",
            descripcion : "Aplicaciones para mejorar la productividad"
        },
        {
            id : 4,
            nombre : "Nocode",
            icono :"assets/img/categorias/nocode.svg",
            descripcion : "Plataformas para 'programar sin codigo' "
        },
        {
            id : 5,
            nombre : "Ofimática",
            icono :"assets/img/categorias/ofimatica.svg",
            descripcion : "Informatica para la oficina, procesador, hojas de calculo, .."
        }
    ]
}