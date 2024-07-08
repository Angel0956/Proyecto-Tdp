<!-- Proyecto de listas de compras realizadon en react con chakra ui, utilizando vitejs como bundle, para la instalacion se puede usar yarn o npm, la estructura es App.jsx como principal, y en componentes estan los componentes que se usan en App.jsx -->

# Lista de compras

Proyecto de listas de compras realizadon en react con chakra ui, utilizando vitejs como bundle, para la instalacion se puede usar yarn o npm, la estructura es App.jsx como principal, y en componentes estan los componentes que se usan en App.jsx

## Instalación

```bash
yarn install
```

o

```bash
npm install
```

## Uso

```bash
yarn dev
```

o

```bash
npm run dev
```

## Estructura

- App.jsx
- Componentes
    - Carrito.jsx
    - Ofertas.jsx
    - Producto.jsx

## La jerarquía de componentes es la siguiente:

- App.jsx
    - Ofertas.jsx
    - Carrito.jsx
    - Producto.jsx

<!--- Explicacion de componentes  --->
## App.jsx

Es el componente principal, en el se importan los componentes Ofertas.jsx y Carrito.jsx, ademas de tener la logica de agregar productos al carrito.

## Ofertas.jsx

Es el componente que muestra los productos en oferta, se le pasa un array de productos y los muestra en una lista.

## Carrito.jsx

Es el componente que muestra los productos que se han agregado al carrito, se le pasa un array de productos y los muestra en una lista.

## Producto.jsx

Es el componente que muestra un producto, se le pasa un objeto producto y lo muestra en una lista.

<!--- Fin de explicacion de componentes  --->

## Autor

👤 **Angel Lopez**

- Github: [@ostjh](