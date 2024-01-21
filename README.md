# Actualización del Proyecto de Peña Empresa Industrial en un Servidor Local

Fecha: [21/1/2024]

Autor: [Julio Jasan Badell Argudin](https://jasanbadell.github.io/)

Este informe proporciona instrucciones detalladas sobre cómo actualizar el proyecto de Peña Empresa Industrial alojado en un repositorio de [GitHub.](https://github.com/) Se explica el proceso de descarga del repositorio, instalación de las dependencias y actualización del contenido de la base de datos utilizando el archivo "dummy.js".

## Proceso de Actualización

Para actualizar el proyecto de la Empresa Industrial Ramon Peña en un servidor local, sigue los pasos a continuación:

### Paso 1: Descargar el repositorio

Acceder al repositorio de [GitHub](https://github.com/JasanBadell/penna-project) donde se encuentra alojado el proyecto.

Hacer clic en el botón "Code" y copiar el enlace del repositorio.

![Foto de ejemplo](<Clonar Repo.png>)

### Paso 2: Clonar el repositorio

Abrir la línea de comandos o terminal en un servidor local.

![Terminal de comandos de Git](<Terminal de Git.png>)

Navegar a la ubicación deseada para el proyecto y ejecutar el siguiente comando:

```

git clone [https://github.com/JasanBadell/penna-project.git]

```

### Paso 3: Navegar al directorio del proyecto

Utilizar el comando cd para navegar al directorio del proyecto clonado.

![Directorio del Proyecto clonado](<Terminal de Git en el directorio.png>)

### Paso 4: Instalar las dependencias

Ejecutar el comando para instalar las dependencias del proyecto.

```

npm install

```

### Paso 5: Actualizar el contenido de la base de datos

Localizar el archivo "dummys.js" dentro del proyecto clonado. Este archivo se encuentra en la dirección:

```

/src/assets/dummy.js

```

Abrir el archivo en un editor de texto.

### Paso 6: Agregar nuevo contenido a la base de datos

Dentro del archivo "dummys.js", agregar nuevos objetos de datos siguiendo la estructura existente.

#### Añadir Productos nuevos

Para agregar un nuevo producto, utilizar la siguiente estructura:

```

import [nombre de referencia de la imagen] from "./Productos/[nombre de la imagen].[formato de la imagen]";

const products = [
  // ... otros productos existentes

  {
    id: [ID del producto],
    img: [nombre de referencia de la imagen],
    title: [titulo del producto],
    category: [categoria del producto],
    subCategory: [subcategoria del producto],
    description: [descripcion del producto]
  },
];

```

Debe asegurarse el reemplazo de los valores entre corchetes con los datos específicos del nuevo producto.

Por ejemplo, si se desea agregar un nuevo producto con los siguientes detalles:

_ID del producto: 123456_

_Nombre de referencia de la imagen: imagen1_

_Título del producto: Nuevo Producto_

_Categoría del producto: Electrónica_

_Subcategoría del producto: Teléfonos_

_Descripción del producto: Este es un nuevo producto._

El código se vería así:

```

import imagen1 from "./Productos/imagen1.jpg";

const products = [
  // ... otros productos existentes

  {
    id: 123456,
    img: imagen1,
    title: "Nuevo Producto",
    category: "Electrónica",
    subCategory: "Teléfonos",
    description: "Este es un nuevo producto"
  },
];

```

#### Añadir Noticias Nuevas

(En esta sección es válido aclarar que las noticia siempre estarán alojadas en enlaces externos al sitio.)

Para agregar una nuevo noticia, utilizar la siguiente estructura:

```

import [nombre de referencia de la imagen] from "./BrandNews/[nombre de la imagen].[formato de la imagen]";

const brandNews = [
  // ... otras noticias existentes

  {
    title: [titulo de la noticia],
    port_img: [nombre de referencia de la imagen],
    autor: [autor/a de la noticia],
    fountain: [fuente de la cual fue extraida la noticia],
    path: [dirección donde esta alojada la noticia],
  },
];

```

Debe asegurarse el reemplazo de los valores entre corchetes con los datos específicos de la nueva noticia.

Por ejemplo, si se desea agregar una nueva noticia con los siguientes detalles:

_Título de la noticia: Nueva Noticia_

_Nombre de referencia de la imagen: imagen2_

_Autor de la noticia: Pedro Alvarez_

_Fuente de la noticia: Juventud Rebelde_

_Dirección de la noticia: https://juventudrebelde.cu/index.php/noticias-NuevaNoticia_

El código se vería así:

```

import imagen2 from "./Productos/imagen2.png";

const brandNews = [
  // ... otras noticias existentes

  {
    title: "Nueva Noticia",
    port_img: imagen2,
    autor: "Pedro Alvarez",
    fountain: "Juventud Rebelde",
    path: "https://juventudrebelde.cu/index.php/noticias-NuevaNoticia",
  },
];

```

Guardar los cambios realizados en el archivo "dummys.js".

### Paso adicional: Crear la carpeta "dist" con el comando npm run build

Después de haber realizado todas las modificaciones necesarias en el proyecto y antes de desplegarlo, es importante generar la carpeta "dist" que contiene los archivos optimizados y listos para ser utilizados en producción. Para lograr esto, se debe seguir el siguiente paso adicional:

Abrir la línea de comandos o terminal en la carpeta raíz del proyecto.

Ejecutar el siguiente comando:

```

npm run build

```

Este comando ejecutará el script de construcción definido en el archivo "package.json" y generará la carpeta "dist" con los archivos optimizados.

Esperar a que el comando finalice la construcción del proyecto. Una vez completado, se encontrará la carpeta "dist" en el directorio raíz del proyecto.

La carpeta "dist" contiene los archivos HTML, CSS y JavaScript optimizados y listos para ser desplegados en un servidor web.

Es importante mencionar que antes de desplegar el proyecto, es recomendable realizar pruebas exhaustivas en un entorno de desarrollo y asegurarse de que todo funcione correctamente.

Recuerda que el proceso de despliegue puede variar según la configuración de tu servidor y el entorno en el que estés trabajando.

### Vista previa del proyecto

Si se desea obtener una vista previa del proyecto antes de realizar el despliegue en un servidor web, se puede utilizar el comando npm run preview.

Abrir la línea de comandos o terminal en la carpeta raíz del proyecto.

Ejecutar el siguiente comando:

```

npm run preview

```

Este comando ejecutará el script de vista previa definido en el archivo "package.json" y abrirá el proyecto en un servidor de desarrollo local.

Esperar a que el comando inicie el servidor de desarrollo y genere la vista previa del proyecto. Una vez completado, se verá un mensaje en la línea de comandos que indica la dirección URL donde se puede acceder a la vista previa del proyecto en un navegador.

La vista previa permitirá interactuar con el proyecto y verificar que todas las funcionalidades estén funcionando correctamente antes de realizar el despliegue en un entorno de producción.

Recuerdar que la vista previa generada por el comando npm run preview es para propósitos de desarrollo y no se recomienda utilizarla como una solución de producción. Es importante realizar pruebas adicionales en un entorno de desarrollo antes de realizar el despliegue final.

## Conclusiones

En este informe, se ha proporcionado una guía detallada sobre cómo actualizar un proyecto de la Empresa Industrial Ramon Peña que está alojado en un repositorio de GitHub. Se han explicado los pasos para descargar el repositorio, instalar las dependencias y actualizar el contenido de la base de datos utilizando el archivo "dummys.js".

Es importante tener en cuenta que este informe asume que ya se tiene un conocimiento básico sobre el uso de Git y GitHub. Además, se recomienda seguir las mejores prácticas de control de versiones al realizar actualizaciones en un entorno de producción.

¡Gracias por leer este informe técnico! Si tienes alguna pregunta adicional, no dudes en consultar.
