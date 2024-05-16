function buscar(){
    const busqueda = document.querySelector('#search').value;
    console.log(busqueda, busqueda.length);
    const materias = manuales.materias;
      const busquedaValores = materias.filter(materia =>  (materia.nombre.toUpperCase().includes(busqueda.toUpperCase()) || materia.materia.toUpperCase().includes(busqueda.toUpperCase())));
    console.log(busquedaValores);
    //verBusqueda()


}

function verBusqueda(){
    document.getElementById('busquedas').showModal();
}