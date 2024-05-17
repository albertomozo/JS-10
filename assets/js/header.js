let headerHtml = '<div id=titulo><h1>Lista de Cursos</h1></div>';
headerHtml += '<div id="buscador"><input type="search" name="search" id="search" onclick="buscar()"/></div>';
headerHtml += ' <div id="cart" class="cart" data-totalitems="0"><div id="iconoCarrito" onclick="verCarrito()"><img src="assets/img/cart.png"><span id="numProductos"></span></div></div>';
document.getElementById('header').innerHTML=headerHtml;