# NOIR — Plantilla Astro para peluquería unisex

Web one-page en blanco y negro, pensada para reutilizar con distintos clientes.

## Comandos

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera /dist
```

## Qué tocar para personalizar

| Quiero cambiar…                         | Archivo                          |
| --------------------------------------- | -------------------------------- |
| Nombre, textos, precios, horario, equipo | `src/config/site.ts`             |
| Teléfono, WhatsApp, dirección, redes    | `src/config/site.ts` → `contact` |
| Colores, fuentes, bordes redondeados    | `src/styles/theme.css`           |
| Fotos en color o en blanco y negro      | `--img-filter` en `theme.css`    |
| Fotos                                   | `public/images/` (mismo nombre) o cambia la ruta en `site.ts` |
| Dominio (SEO)                           | `astro.config.mjs` → `site`      |
| Favicon                                 | `public/favicon.svg`             |

## Estructura

```
src/
├── config/site.ts      ← TODO el contenido
├── styles/
│   ├── theme.css       ← variables de diseño (colores, fuentes…)
│   └── global.css      ← estilos base
├── layouts/Layout.astro
├── components/         ← una sección = un componente
│   ├── Header, Hero, Marquee, About,
│   └── Services, Gallery, Team, Contact, Footer
└── pages/index.astro   ← orden de las secciones
```

Para quitar o reordenar secciones, edita `src/pages/index.astro`.

## Ejemplos rápidos

- **Versión con color:** en `theme.css` pon `--img-filter: none;` y `--color-accent: #c8a15a;`.
- **Botones redondeados:** `--radius: 999px;`.
- **Otra tipografía:** cambia `fontsUrl` en `site.ts` y `--font-display` en `theme.css`.

Las imágenes actuales son SVG de relleno: sustitúyelas por fotos reales (JPG/WebP) y actualiza las rutas en `site.ts`.
