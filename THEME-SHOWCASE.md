# SazarDev Brutal Minimal Theme

Un tema **minimalista** con toques de diseño *brutal* para Visual Studio Code.

## 🎨 Filosofía del Diseño

### Principios Core

1. **Minimalismo**: Solo los elementos esenciales
2. **Brutalismo**: Contrastes fuertes y decisiones claras
3. **Modernidad**: Estética tecnológica y futurista
4. **Elegancia**: Armonía en la simplicidad
5. **Limpieza**: Cero ruido visual

### Paleta de Colores

| Color              | Hex       | Uso                             |
| ------------------ | --------- | ------------------------------- |
| Verde Neón         | `#00ff88` | Accent principal, cursor        |
| Azul Eléctrico     | `#0088ff` | Keywords, elementos importantes |
| Cyan Brillante     | `#00ffdd` | Clases, tipos, operadores       |
| Rosa Magenta       | `#ff00dd` | Tags, regex                     |
| Amarillo Eléctrico | `#ffdd00` | Números, constantes             |
| Naranja            | `#ff8800` | Decoradores, parámetros         |
| Rojo Agresivo      | `#ff0055` | Errores, debug                  |

## 🔧 Características

- ✅ **Alto contraste** para máxima legibilidad
- ✅ **Sintaxis highlighting** optimizada
- ✅ **Interfaz coherente** en todos los elementos
- ✅ **Soporte completo** para múltiples lenguajes
- ✅ **Diseño accesible** con colores seguros
- ✅ **Terminal integrado** con colores ANSI

## 📋 Lenguajes Soportados

### Frontend
- **JavaScript/TypeScript** - Highlighting optimizado
- **React/JSX** - Componentes destacados
- **HTML** - Tags y atributos diferenciados
- **CSS/SCSS** - Propiedades y valores claros

### Backend
- **Python** - Decoradores y self destacados
- **Node.js** - Módulos y exports
- **PHP** - Sintaxis mejorada
- **Java/C#** - Clases e interfaces

### Otros
- **JSON** - Keys jerárquicos por colores
- **Markdown** - Texto enriquecido
- **SQL** - Queries legibles
- **YAML** - Configuraciones claras

## 🚀 Instalación Rápida

```bash
# Desde VS Code Marketplace
code --install-extension sazardev.brutal-minimal-theme

# O usando vsce
vsce package
code --install-extension clean-code-*.vsix
```

## 🎯 Configuración Recomendada

```json
{
  "workbench.colorTheme": "SazarDev Brutal Minimal",
  "editor.fontFamily": "'JetBrains Mono', 'Fira Code', 'Cascadia Code'",
  "editor.fontSize": 14,
  "editor.lineHeight": 1.6,
  "editor.fontLigatures": true,
  "editor.cursorBlinking": "smooth",
  "editor.cursorStyle": "line",
  "editor.renderWhitespace": "boundary",
  "editor.minimap.enabled": true,
  "editor.minimap.showSlider": "always"
}
```

## 💡 Ejemplos de Código

### JavaScript/TypeScript
```typescript
// Función con tipado fuerte
const processUsers = async (users: User[]): Promise<ProcessedUser[]> => {
  return users
    .filter(user => user.isActive)
    .map(user => ({
      ...user,
      fullName: `${user.firstName} ${user.lastName}`,
      avatar: generateAvatar(user.email)
    }));
};

class UserManager {
  private static instance: UserManager;
  
  @deprecated("Use getInstance() instead")
  constructor() {
    // Implementation
  }
}
```

### Python
```python
# Decorador personalizado
@dataclass
class User:
    id: int
    name: str
    email: str
    is_active: bool = True
    
    def __post_init__(self):
        if not self.email:
            raise ValueError("Email is required")
    
    @property
    def display_name(self) -> str:
        return f"{self.name} <{self.email}>"

# Async function
async def fetch_users() -> List[User]:
    async with aiohttp.ClientSession() as session:
        async with session.get("/api/users") as response:
            data = await response.json()
            return [User(**user) for user in data]
```

### CSS
```css
/* Variables CSS con tema */
:root {
  --primary: #00ff88;
  --secondary: #0088ff;
  --accent: #ff00dd;
  --bg-dark: #0a0a0a;
}

.brutal-card {
  background: var(--bg-dark);
  border: 2px solid var(--primary);
  box-shadow: 4px 4px 0 var(--primary);
  transform: translate(0, 0);
  transition: transform 0.2s ease;
}

.brutal-card:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 var(--primary);
}
```

## 📱 Screenshots

> **Nota**: Para ver el tema en acción, presiona `F5` en VS Code y selecciona el tema en la nueva ventana.

### Interfaz Principal
- Editor con sintaxis highlighting completa
- Sidebar con iconos y colores consistentes
- Terminal integrado con colores ANSI
- Panel de debug con estados claros

### Lenguajes Específicos
- **JSON**: Keys por niveles de profundidad
- **Markdown**: Headers, links y código inline
- **Git**: Diff colors para added/removed/modified
- **Logs**: Error levels diferenciados

## 🔄 Actualizaciones

### Version 0.1.0
- ✅ Lanzamiento inicial
- ✅ Soporte completo para lenguajes principales
- ✅ Interfaz brutal-minimal
- ✅ Terminal con colores ANSI
- ✅ Documentación completa

### Próximas Features
- 🔲 Variante Light (Brutal Light)
- 🔲 Soporte para más lenguajes
- 🔲 Customización de accent colors
- 🔲 Pack de iconos complementario

## 🤝 Contribuir

¿Tienes ideas para mejorar el tema? ¡Contribuye!

1. **Fork** el repositorio
2. **Clone** tu fork localmente
3. **Crea** una rama para tu feature
4. **Commit** tus cambios
5. **Push** y abre un **Pull Request**

```bash
git clone https://github.com/tu-usuario/brutal-minimal-theme.git
cd brutal-minimal-theme
git checkout -b feature/nueva-caracteristica
# Haz tus cambios...
git commit -m "Add: nueva característica increíble"
git push origin feature/nueva-caracteristica
```

## 📄 Licencia

MIT License - Úsa, modifica y distribuye libremente.

## 🔗 Enlaces

- [GitHub Repository](https://github.com/sazardev/brutal-minimal-theme)
- [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=sazardev.brutal-minimal-theme)
- [Issues & Feedback](https://github.com/sazardev/brutal-minimal-theme/issues)
- [Website](https://sazardev.com)

---

## 🎨 Design Credits

**Inspirado en:**
- Diseño Brutalista arquitectónico
- Estética Cyberpunk y Synthwave
- Principios de UX/UI minimalistas
- Paletas de colores neón tech

**Desarrollado por:**
**SazarDev** - Passionate about clean code and brutal aesthetics

---

> *"Simplicidad es la máxima sofisticación, brutalidad es la máxima honestidad."*
> — SazarDev Design Philosophy

**¡Disfruta programando con estilo brutal! 🚀**
