# Portafolio de Milagros Cancela - Ingeniería de Datos

Un portafolio personal moderno y profesional para mostrar proyectos, apuntes y documentación del curso de Ingeniería de Datos.

## 🚀 Características

- **Diseño Moderno**: Paleta de colores rosa y violeta profesional
- **Totalmente Responsivo**: Optimizado para todos los dispositivos
- **Navegación Suave**: Scroll suave entre secciones
- **Cursor Personalizado**: Cursor rosa con bordes blancos y efectos de brillo fucsia al hacer clic
- **Componentes Modulares**: Fácil de mantener y escalar
- **Optimizado para Vercel**: Listo para despliegue

## 📋 Secciones

### 1. Sobre Mí
- Biografía personal y profesional
- Trayectoria académica y capacitaciones
- Logros y certificaciones
- Enlaces a redes sociales y CV

### 2. Conocimientos Previos
- Fundamentos de probabilidad y estadística
- Matemáticas aplicadas (álgebra lineal, cálculo)
- Programación en Python y SQL
- Recursos organizados por materia
- Apuntes y ejercicios prácticos

### 3. Curso
- Descripción del curso de Ingeniería de Datos
- Expectativas y objetivos
- Información del docente
- Programa detallado por unidades

### 4. Apuntes del Curso
- Diapositivas compartidas en clase
- Apuntes personales
- Lecturas asignadas
- Recursos adicionales

### 5. Portafolio de Trabajos
- Organización por unidades (UT1, UT2, UT3, UT4)
- **Selección Visual**: Unidades seleccionadas en rosa pastel con efectos elegantes
- Ejercicios con Jupyter Notebooks
- Visualizaciones realizadas
- Reflexiones personales
- Documentación utilizada

### 6. Documentación
- Herramientas y frameworks
- Papers y artículos científicos
- Tutoriales y guías
- Estándares de la industria

## 🛠️ Tecnologías Utilizadas

- **Next.js 15** - Framework de React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utilitarios
- **React Hooks** - Estado y efectos
- **CSS Modules** - Estilos modulares

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone <url-del-repositorio>

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

### Personalización

1. **Información Personal**: Edita los componentes en `components/` para actualizar tu información
2. **Colores**: Modifica `tailwind.config.js` para cambiar la paleta de colores
3. **Contenido**: Actualiza los datos en cada componente según tus proyectos
4. **Archivos**: Sube tus archivos a las carpetas `public/files/`, `public/notebooks/`, `public/visualizations/`

## 📁 Estructura del Proyecto

```
portafolio-ia-datos/
├── app/                    # Páginas de Next.js
│   ├── (home)/            # Página principal
│   ├── layout.tsx         # Layout principal
│   └── global.css         # Estilos globales
├── components/            # Componentes React
│   ├── Header.tsx         # Navegación
│   ├── About.tsx          # Sección sobre mí
│   ├── PreviousKnowledge.tsx # Conocimientos previos
│   ├── Course.tsx         # Información del curso
│   ├── Notes.tsx          # Apuntes y archivos
│   ├── Portfolio.tsx      # Portafolio de trabajos
│   ├── Documentation.tsx  # Documentación
│   ├── CustomCursor.tsx   # Cursor personalizado
│   └── Footer.tsx         # Pie de página
├── public/                # Archivos estáticos
│   ├── files/             # Archivos descargables
│   ├── notebooks/         # Jupyter Notebooks
│   └── visualizations/    # Visualizaciones
├── tailwind.config.js     # Configuración de Tailwind
└── package.json           # Dependencias
```

## 🎨 Personalización de Colores

El proyecto usa una paleta personalizada de rosa y violeta. Para modificar los colores:

1. Edita `tailwind.config.js` en la sección `colors`
2. Actualiza las variables CSS en `app/global.css`
3. Los colores principales son:
   - Primary: Rosa (#ec4899)
   - Secondary: Violeta (#a855f7)
   - Accent: Púrpura (#d946ef)

## ✨ Cursor Personalizado

El portafolio incluye un cursor personalizado con las siguientes características:

- **Color Rosa**: Cursor principal con bordes blancos
- **Efecto de Hover**: Se agranda y cambia de color al pasar sobre elementos interactivos
- **Brillos Fucsia**: Efectos de brillo al hacer clic en cualquier elemento
- **Responsive**: Solo se activa en dispositivos de escritorio
- **Animaciones Suaves**: Transiciones y efectos de pulso

## 🎨 Sistema de Estilos Consistentes

### Diseño Unificado
El portafolio implementa un sistema de estilos consistente en todas las secciones:

- **Selección Rosa Pastel**: Todos los elementos seleccionados usan el mismo estilo
- **Efectos Visuales Uniformes**: Brillo, escala y transiciones consistentes
- **Paleta Coherente**: Colores unificados en todo el sitio
- **Hover Consistente**: Mismo comportamiento en todos los elementos interactivos

### Elementos con Estilo Consistente
- **Tabs de Navegación**: About, Course, Notes, Documentation, Previous Knowledge
- **Categorías de Contenido**: Todas las secciones de filtros y navegación
- **Unidades del Portafolio**: UT1, UT2, UT3, UT4 con selección visual
- **Botones Interactivos**: Elementos de selección y navegación

### Paleta de Colores Unificada
- **Rosa Pastel Seleccionado**: `linear-gradient(135deg, #fce7f3, #fbcfe8)`
- **Texto Oscuro**: `#831843` para mejor legibilidad
- **Bordes Elegantes**: `#f472b6` con anillo de resplandor
- **Sombras Profundas**: Múltiples capas para efecto de elevación
- **Hover Suave**: `#fdf2f8` con transiciones fluidas

### Efectos Visuales
- **Escala Aumentada**: 1.05x para elementos seleccionados, 1.02x para hover
- **Animación de Brillo**: Efecto de pulso sutil con gradiente blanco
- **Transiciones Suaves**: 0.3s para todos los cambios de estado
- **Sombras Dinámicas**: Diferentes intensidades según el estado

### Personalización del Cursor

Para modificar el cursor, edita las clases CSS en `app/global.css`:

```css
.cursor-glow {
  background: #ec4899; /* Color del cursor */
  border: 2px solid white; /* Borde blanco */
}

.click-effect {
  background: radial-gradient(circle, rgba(255, 0, 255, 0.9) 0%, ...);
}
```

## 📱 Responsive Design

El portafolio está optimizado para:
- **Móviles**: 320px - 768px
- **Tablets**: 768px - 1024px
- **Desktop**: 1024px+

## 🚀 Despliegue en Vercel

1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno si es necesario
3. Despliega automáticamente

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📧 Contacto

- Email: milagros.cancela@correo.ucu.edu.uy
- LinkedIn: [Milagros Cancela Cano](https://www.linkedin.com/in/milagros-cancela-cano-56035331b/)
- GitHub: [milagroscancela](https://github.com/milagroscancela)

---

Desarrollado con ❤️ para la comunidad de Ingeniería de Datos