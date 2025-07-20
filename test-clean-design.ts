// === SazarDev Brutal Minimal Theme - Test Code ===
// Nuevo diseño: Limpio, Minimal, Sin "gordura"

interface UserConfig {
    id: number;
    name: string;
    email: string;
    preferences: {
        theme: 'dark' | 'light';
        notifications: boolean;
    };
}

class BrutalMinimalApp {
    private users: UserConfig[] = [];

    constructor() {
        this.initialize();
    }

    async initialize(): Promise<void> {
        try {
            const data = await this.fetchUsers();
            this.users = data;
            console.log('✅ App initialized successfully');
        } catch (error) {
            console.error('❌ Initialization failed:', error);
        }
    }

    private async fetchUsers(): Promise<UserConfig[]> {
        const response = await fetch('/api/users');
        return response.json();
    }

    // Método para filtrar usuarios activos
    getActiveUsers(filter?: string): UserConfig[] {
        return this.users.filter(user => {
            const matchesFilter = !filter ||
                user.name.toLowerCase().includes(filter.toLowerCase());
            return matchesFilter && user.preferences.notifications;
        });
    }

    // Configuración del tema brutal minimal
    applyTheme(): void {
        const config = {
            colors: {
                primary: '#00ff88',    // Verde neón
                secondary: '#0088ff',  // Azul eléctrico  
                accent: '#ff00dd',     // Magenta brutal
                background: '#0a0a0a', // Negro profundo
                text: '#f5f5f5'        // Blanco suave
            },
            typography: {
                fontFamily: 'JetBrains Mono',
                fontSize: 14,
                lineHeight: 1.6
            }
        };

        document.documentElement.style.setProperty('--primary', config.colors.primary);
        document.documentElement.style.setProperty('--bg', config.colors.background);
    }
}

// Inicialización
const app = new BrutalMinimalApp();

// Constantes para testing
const API_ENDPOINTS = {
    USERS: '/api/users',
    CONFIG: '/api/config',
    HEALTH: '/health'
} as const;

// Expresión regular para validación
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Función utilitaria
function validateInput(email: string): boolean {
    return EMAIL_PATTERN.test(email);
}

export { BrutalMinimalApp, UserConfig, API_ENDPOINTS };

/* 
=== CAMBIOS EN EL TEMA ===

✅ TABS: 
- Fondo transparente 
- Solo línea verde arriba en tab activo
- Sin bordes "gorditos"
- Hover sutil

✅ EDITOR:
- Line highlight removido (menos gordura)
- Selección más sutil con verde neón
- Indent guides con accent color

✅ WORKBENCH:
- Bordes eliminados o transparentes
- Más limpio y minimal
- Accent colors solo donde es necesario

✅ FILOSOFÍA:
- Cada elemento tiene propósito
- Cero ruido visual
- Brutal en contraste, minimal en forma
- Programador-friendly
*/
