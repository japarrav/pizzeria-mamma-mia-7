# Pizzería Mamma Mía - Hito 7

Proyecto de pizzería desarrollado con React + Vite para el Hito 7 del curso de Desafío Latam.

## Nuevas Funcionalidades - Hito 7

### 1. useParams para obtener el ID de la pizza
- Implementado en `Pizza.jsx` para obtener el ID desde la URL
- Se realiza petición a la API: `GET /api/pizzas/:id`
- Componente `CardPizza` actualizado con Link para redirigir a la página de detalle

### 2. UserContext
- Nuevo contexto `UserContext` creado en `/src/context/UserContext.jsx`
- Estado `token` (boolean, por defecto `true`)
- Método `logout()` que cambia el token a `false`

### 3. Navbar con UserContext
- Navbar actualizado para usar `UserContext`
- Botón de logout ejecuta el método `logout` del contexto
- Muestra botones diferentes según el estado del token:
  - `token = true`: Profile, Logout
  - `token = false`: Login, Register

### 4. Cart con validación de token
- Botón "Pagar" deshabilitado cuando `token = false`
- Utiliza `UserContext` para validar el estado de autenticación

### 5. Rutas Protegidas
- `/profile`: Solo accesible si `token = true`, redirige a `/login` si es false
- `/login` y `/register`: Solo accesibles si `token = false`, redirige a `/` si es true
- Implementado mediante componentes `ProtectedRoute` y `PublicRoute`

## Instalación

```bash
npm install
```

## Ejecución

```bash
npm run dev
```

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run lint` - Ejecuta el linter
- `npm run preview` - Previsualiza la build de producción

## Estructura del Proyecto

```
src/
├── components/
│   ├── CardPizza.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   └── Navbar.jsx
├── context/
│   ├── CartContext.jsx
│   └── UserContext.jsx (NUEVO)
├── data/
│   └── pizzas.js
├── pages/
│   ├── Cart.jsx
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── NotFound.jsx
│   ├── Pizza.jsx (ACTUALIZADO)
│   ├── Profile.jsx
│   └── Register.jsx
├── utils/
│   └── formatPrice.js
├── App.jsx (ACTUALIZADO)
└── main.jsx
```

## Tecnologías Utilizadas

- React 19.2.0
- React Router DOM 7.9.6
- Bootstrap 5.3.8
- Vite 7.2.2

## Nota sobre la API

El componente `Pizza.jsx` espera que la API esté corriendo en `http://localhost:5000`. 
Asegúrate de tener el backend funcionando o actualiza la URL según corresponda.
