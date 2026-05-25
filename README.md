# 🎯 Sorteo - Aplicación de Rifas

Una aplicación web moderna para realizar sorteos aleatorios a partir de una lista de nombres. Construida con **Vite**, **TypeScript** y **Tailwind CSS**.

## 🎨 Características

- ✅ Carga nombres desde un archivo JSON
- ✅ Sorteos completamente aleatorios
- ✅ Elimina nombres después de que salen sorteados
- ✅ Historial de ganadores
- ✅ Estadísticas en tiempo real (total, restantes, sorteados)
- ✅ Interfaz moderna con Tailwind CSS
- ✅ Responsive design
- ✅ Función de reset para empezar de nuevo

## 🚀 Inicio Rápido

### Requisitos
- Node.js 16+
- npm o yarn

### Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa del build
npm run preview
```

## 📁 Estructura del Proyecto

```
sorteo/
├── public/
│   └── names.json          # Archivo de nombres para sortear
├── src/
│   ├── main.ts            # Lógica principal de la aplicación
│   └── style.css          # Estilos con Tailwind
├── index.html             # Página principal
├── tailwind.config.js     # Configuración de Tailwind
├── postcss.config.js      # Configuración de PostCSS
└── vite.config.ts         # Configuración de Vite
```

## 📝 Formato del JSON

El archivo `public/names.json` debe tener el siguiente formato:

```json
{
  "names": [
    "Juan",
    "María",
    "Carlos",
    "Ana",
    "Pedro",
    "Laura",
    "Miguel",
    "Sofia",
    "Diego",
    "Rosa"
  ]
}
```

**Nota:** Los nombres pueden estar repetidos. El sistema sorteará entre todas las instancias y las eliminará de forma individual.

## 🎮 Cómo Usar

1. **Cargar nombres**: La aplicación carga automáticamente los nombres del archivo `public/names.json`
2. **Sortear**: Presiona el botón "🎲 Sortear" para hacer un sorteo aleatorio
3. **Ver historial**: Los nombres sorteados aparecen en la lista de la derecha
4. **Resetear**: Presiona "🔄 Resetear" para empezar de nuevo con todos los nombres

## 🛠️ Tecnologías Utilizadas

- **Vite**: Build tool moderno y rápido
- **TypeScript**: Tipado estático para mayor seguridad
- **Tailwind CSS**: Framework de utilidades CSS
- **PostCSS**: Procesamiento de CSS con autoprefixer

## 📦 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo con HMR
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Visualiza el build de producción localmente
- `npm run lint` - Valida el código (si está configurado)

## 🎓 Personalización

### Cambiar los nombres
Edita el archivo `public/names.json` y reemplaza los nombres con los que desees sortear.

### Personalizar colores
Edita `tailwind.config.js` para cambiar los colores de la aplicación.

### Modificar la interfaz
Edita `src/main.ts` en la función `render()` para cambiar el diseño y disposición.

## 📱 Compatibilidad

- Chrome/Edge (versión reciente)
- Firefox (versión reciente)
- Safari (versión reciente)
- Navegadores modernos en dispositivos móviles

## 🐛 Solución de Problemas

### Los nombres no se cargan
- Verifica que el archivo `public/names.json` existe
- Comprueba que el formato JSON es válido
- Abre la consola del navegador (F12) para ver errores

### Los estilos no se aplican
- Reconstruye el proyecto: `npm run build`
- Limpia el caché: Presiona Ctrl+Shift+R (o Cmd+Shift+R en Mac)

## 📄 Licencia

Proyecto libre para uso personal y educativo.

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Siéntete libre de hacer fork del proyecto y crear un pull request.

---

**Hecho con ❤️ usando Vite + TypeScript + Tailwind CSS**
