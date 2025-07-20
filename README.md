# SazarDev - Tema Personalizado para VS Code

Un tema de colores elegante y moderno para Visual Studio Code, diseñado para mejorar la experiencia de programación con una paleta de colores cuidadosamente seleccionada.

## 🎨 Características

- **Tema base oscuro** optimizado para largas sesiones de código
- **Sintaxis highlighting** mejorada para múltiples lenguajes
- **Colores contrastantes** que reducen la fatiga visual
- **Diseño minimalista** que se enfoca en el código

## 🚀 Instalación

### Desde el código fuente:
1. Clona este repositorio
2. Abre VS Code en la carpeta del proyecto
3. Presiona `F5` para abrir una nueva ventana con la extensión cargada
4. Ve a `File > Preferences > Color Theme` y selecciona "sazardev"

### Para desarrollo:
```bash
# Instalar dependencias
npm install

# Probar la extensión
code --extensionDevelopmentPath=. --new-window
```

## 📦 Publicación

Para publicar tu tema en el VS Code Marketplace:

1. **Instala vsce (VS Code Extension Manager)**:
```bash
npm install -g @vscode/vsce
```

2. **Empaqueta la extensión**:
```bash
vsce package
```

3. **Publica en el Marketplace**:
```bash
vsce publish
```

## 🛠️ Personalización

Puedes modificar los colores editando el archivo `themes/sazardev-color-theme.json`:

- **colors**: Define los colores de la interfaz de VS Code
- **tokenColors**: Define los colores para el resaltado de sintaxis

## 📋 Estructura del Proyecto

```
├── themes/
│   └── sazardev-color-theme.json  # Definición del tema
├── package.json                   # Manifest de la extensión
├── README.md                      # Este archivo
└── .vscode/
    └── launch.json               # Configuración de debug
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 🔗 Enlaces Útiles

- [VS Code Theme Color Reference](https://code.visualstudio.com/api/references/theme-color)
- [Publishing Extensions](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
- [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

---

**¡Disfruta programando con tu nuevo tema!** ✨DME

## Working with Markdown

You can author your README using Visual Studio Code. Here are some useful editor keyboard shortcuts:

* Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux).
* Toggle preview (`Shift+Cmd+V` on macOS or `Shift+Ctrl+V` on Windows and Linux).
* Press `Ctrl+Space` (Windows, Linux, macOS) to see a list of Markdown snippets.

## For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
