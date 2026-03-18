# Animal Libre - Sitio Web de Adopción de Animales

Sitio web estático para una fundación de adopción de animales. Permite a los usuarios explorar mascotas disponibles, filtrarlas, marcar favoritos y completar un formulario de adopción.

## Tecnologías

- HTML5, CSS3, JavaScript (Vanilla)
- [Lucide Icons](https://lucide.dev/) (CDN)
- Unsplash API (imágenes dinámicas de mascotas)
- Google Maps Embed
- JSON como base de datos de mascotas

## Estructura del proyecto

```
Animal adoption website/
├── static/
│   ├── css/
│   │   └── styles.css          # Hoja de estilos principal (59 KB)
│   ├── js/
│   │   └── main.js             # Lógica del sitio (677 líneas)
│   ├── data/
│   │   └── pets.json           # Base de datos de mascotas
│   ├── images/
│   │   ├── logo.png
│   │   └── mascotas/
│   └── docs/
│       └── formulario-adopcion.pdf
└── templates/
    ├── index.html              # Página de inicio
    ├── adopciones.html         # Catálogo de mascotas
    ├── nosotros.html           # Sobre la fundación
    ├── como-ayudar.html        # Donaciones y voluntariado
    ├── contacto.html           # Contacto y ubicación
    └── formulario-de-adopcion.html  # Formulario de adopción
```

## Páginas

| Página | Descripción |
|---|---|
| `index.html` | Hero, estadísticas, carrusel de recién llegados, donaciones |
| `adopciones.html` | Catálogo con filtros avanzados y modal de detalle |
| `nosotros.html` | Historia, misión y equipo de la fundación |
| `como-ayudar.html` | Opciones de donación, apadrinamiento y voluntariado |
| `contacto.html` | Formulario de contacto, horarios, FAQs y mapa |
| `formulario-de-adopcion.html` | Formulario completo de solicitud de adopción |

## Funcionalidades destacadas

- **Filtrado de mascotas** por nombre, tipo, edad, género y tamaño
- **Sistema de favoritos** persistente con `localStorage`
- **Modal de detalle** con galería de imágenes y thumbnails
- **Carrusel automático** con autoplay y paginación por puntos
- **Formulario de adopción** con validación y campos condicionales
- **Diseño responsivo** adaptado a móvil, tablet y escritorio

## Uso

No requiere servidor ni dependencias instaladas. Abrir directamente en el navegador:

```bash
open templates/index.html
```

O servir localmente con cualquier servidor estático:

```bash
npx serve .
# → http://localhost:3000/templates/index.html
```

## Paleta de colores

| Rol | Color |
|---|---|
| Primario | `#093825` / `#0f5438` (verde bosque) |
| Secundario | `#E7A736` / `#c98e20` (dorado) |
| Fondo | `#f0f7f3` (verde claro) |
| Footer | `#061f14` (verde oscuro) |

## Datos de mascotas

El archivo `static/data/pets.json` contiene el listado de animales disponibles. Cada entrada incluye:

```json
{
  "id": 1,
  "name": "Max",
  "type": "Perro",
  "age": "Adulto",
  "edad_label": "3 años",
  "gender": "Macho",
  "size": "Grande",
  "nuevo": true,
  "adoptado": false,
  "descripcion": "...",
  "image": "https://...",
  "images": ["https://...", "https://..."],
  "tagline": "...",
  "traits": ["Juguetón 🎾", "Leal 🤝"]
}
```

Para agregar una nueva mascota, añadir un objeto con esta estructura al array en `pets.json`.
