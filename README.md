# Dragon Ball Explorer

![Dragon Ball Explorer Banner](https://via.placeholder.com/1200x300.png?text=Dragon+Ball+Explorer)

## Descripción

**Dragon Ball Explorer** es una aplicación web desarrollada en **React** que permite explorar los personajes del universo Dragon Ball de manera sencilla y visual. La aplicación consume la **API pública de Dragon Ball** para obtener información actualizada de los personajes y sus características principales, como nombre, raza y afiliación.

La aplicación incluye dos páginas principales:

- **Home (`/`)**: Muestra un listado de personajes con sus imágenes y detalles importantes.
- **Entities (`/entities`)**: Lista de entidades mostrando 3 propiedades de cada personaje para facilitar la consulta rápida.

El proyecto está pensado para ser **responsive**, asegurando que las tarjetas de personajes se adapten a distintos tamaños de pantalla sin deformar las imágenes.

---

## Tecnologías usadas

- **React 19.1.1**: Framework de JavaScript para construir la interfaz de usuario.
- **React Router DOM 7.9.5**: Manejo de rutas dentro de la aplicación.
- **Axios 1.13.2**: Para realizar solicitudes HTTP a la API de Dragon Ball.
- **Bootstrap 5.3.8**: Framework CSS para diseño responsivo y componentes visuales.
- **HTML5 & CSS3**: Estructura y estilo de la aplicación.

**Dependencias del proyecto:**
```json
"dependencies": {
  "axios": "^1.13.2",
  "bootstrap": "^5.3.8",
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "react-router-dom": "^7.9.5"
}
```

---

## Estructura del proyecto
```
dragonball-react/
│
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── home/
│   │   │   ├── HeroSection.jsx
│   │   │   └── CharacterList.jsx
│   │   └── entities/
│   │       └── EntityList.jsx
│   │
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   └── EntitiesPage.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── public/
├── package.json
└── README.md
```

---

## Pasos para ejecutar el servidor

1. Clonar el repositorio:
```bash
git clone https://github.com/Josue-Zapata-v/dragonball-react.git
cd dragonball-react
```

2. Instalar dependencias:
```bash
npm install
```

3. Ejecutar la aplicación en modo desarrollo:
```bash
npm run dev
```

4. Abrir la aplicación en el navegador:
```
http://localhost:5173/
```

---

## Funcionalidades implementadas

* Listado de personajes con tarjetas (`Card`) con imagen, nombre, raza y afiliación.
* Tarjetas totalmente **responsive** y adaptables a cualquier tamaño de pantalla.
* Páginas con rutas definidas usando **React Router DOM**.
* Consumo de datos en tiempo real desde la **Dragon Ball API** mediante **Axios**.
* Componente de encabezado `HeroSection` para la presentación principal.
* Página de entidades (`/entities`) mostrando 3 propiedades de cada personaje.
* Diseño limpio usando **Bootstrap**, con separación y sombra en tarjetas para mejor visualización.
* Manejo de errores en las llamadas a la API (se muestra lista vacía si falla la solicitud).

---

## Enlaces

* Repositorio GitHub: [https://github.com/Josue-Zapata-v/dragonball-react.git](https://github.com/Josue-Zapata-v/dragonball-react.git)
* Deploy de la aplicación: [https://dragonball-explorer.vercel.app](https://dragonball-explorer.vercel.app)
* Video demostrativo: [https://youtu.be/inventameelvideo](https://youtu.be/inventameelvideo)

---

## Créditos

Desarrollado por **Josue Isai Zapata Villegas** como proyecto personal de práctica en React, integración de APIs y diseño responsive.

---

## Notas

* La aplicación consume la **Dragon Ball API pública**, por lo que requiere conexión a Internet para cargar los personajes y sus imágenes.
* Se recomienda utilizar la última versión de un navegador moderno (Chrome, Firefox, Edge) para visualizar correctamente las tarjetas y estilos.
