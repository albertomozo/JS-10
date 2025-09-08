# JS-10
Este repositorio, va a ser desarrollado en los cursos de FRONT. 
Tiene asociada la siguiente documentación

que se ira actualizando.

https://docs.google.com/presentation/d/13etdGEh2UU89Al2we4YQgIwX5m5M8MzrAdtCjhg-PUs/edit#slide=id.g2dda918c493_0_19


Version Actual v1.0

# filtro_navegacion.html 
Es un fichero obtenido por IA (claude), en el que   usos clases css para hacer filtros.

Te creo un HTML con JavaScript vanilla que maneje la navegación y filtrado de artículos de forma sencilla:He creado un sistema de navegación y filtrado exactamente como lo solicitaste. Las características principales son:

**Botones de navegación:**
- 4 botones: Todos, Frontend, Backend, Herramientas
- El botón activo tiene la clase `active` con un estilo destacado
- Cambio automático de la clase `active` al hacer clic

**Artículos:**
- Cada artículo tiene la clase común `materias`
- Además tienen una clase específica: `frontend`, `back`, o `herramientas`
- Se ocultan/muestran según el filtro seleccionado usando la clase `hidden`

**JavaScript vanilla sin event listeners:**
- Función `filtrarArticulos()` llamada directamente desde `onclick`
- Manejo simple del estado activo de los botones
- Filtrado eficiente de artículos por categoría

El código es sencillo y directo, sin complicaciones adicionales. Los estilos incluyen un diseño moderno con efectos visuales atractivos, pero puedes modificarlos según tus necesidades.

# filtro_navegacion_json.html
Conexión del codigo gemerado por la IA a mi JSON

Te ayudo a modificar el código para que lea los datos de los objetos JavaScript. Voy a crear una versión actualizada que genere dinámicamente tanto las categorías como las fichas de productos.He modificado tu código para que sea completamente dinámico y lea los datos de los objetos JavaScript. Los principales cambios son:

## Características principales:

1. **Navegación dinámica**: Los botones de categoría se generan automáticamente basándose en el objeto `categorias`
2. **Fichas dinámicas**: Todas las fichas de productos se crean leyendo el array `manuales.materias`
3. **Precios visibles**: Cada ficha muestra el precio en la esquina superior derecha
4. **Enlaces funcionales**: Cada ficha incluye un enlace directo al material
5. **Categorización visual**: Cada categoría tiene su propio color distintivo

## Mejoras implementadas:

- **Sistema de categorías mejorado**: Utiliza `data-categoria` para un filtrado más eficiente
- **Colores por categoría**: Cada categoría (1-5) tiene su propio esquema de colores
- **Información completa**: Muestra materia, nombre, precio y enlace
- **Responsive design**: Mantiene el diseño adaptativo original
- **Inicialización automática**: Se ejecuta cuando el DOM está listo

## Estructura de datos respetada:

El código lee directamente de losobjetos `manuales` y `categorias`, respetando la estructura que definiste. Si quieres agregar más materias o categorías, simplemente actualiza los objetos y se reflejarán automáticamente en la interfaz.



# mejora conexión a notion ???






© Alberto Mozo 2023
