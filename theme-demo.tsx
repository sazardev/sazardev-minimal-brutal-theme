// === SazarDev Brutal Minimal Theme Demo ===
// Minimalista, Elegante, Moderno, Limpio, Intuitivo, Brutal

import React, { useState, useEffect } from 'react';
import './App.css';

/**
 * Component principal de la aplicación
 * Demuestra el tema con diferentes elementos de sintaxis
 */
interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

class UserManager {
    private users: User[] = [];
    private static instance: UserManager;

    constructor() {
        this.loadUsers();
    }

    static getInstance(): UserManager {
        if (!UserManager.instance) {
            UserManager.instance = new UserManager();
        }
        return UserManager.instance;
    }

    @deprecated("Use addUser instead")
    createUser(userData: Partial<User>): User {
        const newUser: User = {
            id: Date.now(),
            name: userData.name || 'Anonymous',
            email: userData.email || '',
            isActive: true
        };

        this.users.push(newUser);
        return newUser;
    }

    async loadUsers(): Promise<void> {
        try {
            const response = await fetch('/api/users');
            const data = await response.json();
            this.users = data.users;
        } catch (error) {
            console.error('Error loading users:', error);
        }
    }

    getUsersByStatus(active: boolean): User[] {
        return this.users.filter(user => user.isActive === active);
    }
}

// Función principal de la app
const App: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [filter, setFilter] = useState<string>('');
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        const userManager = UserManager.getInstance();
        const activeUsers = userManager.getUsersByStatus(true);
        setUsers(activeUsers);
    }, []);

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(event.target.value);
    };

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className="app">
            <header className="app-header">
                <h1>SazarDev Brutal Minimal Theme</h1>
                <p>Minimalista • Elegante • Moderno • Brutal</p>
            </header>

            <main>
                <div className="controls">
                    <input
                        type="text"
                        placeholder="Filtrar usuarios..."
                        value={filter}
                        onChange={handleFilterChange}
                    />
                    <button onClick={() => setCount(count + 1)}>
                        Count: {count}
                    </button>
                </div>

                <section className="user-list">
                    {filteredUsers.map(user => (
                        <div key={user.id} className="user-card">
                            <h3>{user.name}</h3>
                            <p>{user.email}</p>
                            <span className={`status ${user.isActive ? 'active' : 'inactive'}`}>
                                {user.isActive ? '🟢 Activo' : '🔴 Inactivo'}
                            </span>
                        </div>
                    ))}
                </section>
            </main>

            <footer>
                <p>&copy; 2025 SazarDev - Brutal Design meets Minimal Aesthetics</p>
            </footer>
        </div>
    );
};

// Constantes y configuración
const CONFIG = {
    API_URL: 'https://api.example.com',
    VERSION: '1.0.0',
    THEME_COLORS: {
        primary: '#00ff88',
        secondary: '#0088ff',
        accent: '#ff00dd',
        background: '#0a0a0a',
        text: '#f5f5f5'
    }
};

// Expresiones regulares
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

// Función de utilidad
function validateEmail(email: string): boolean {
    return EMAIL_REGEX.test(email);
}

// Export default
export default App;

/* 
  === PALETA DE COLORES DEL TEMA ===
  
  Background Principal: #0a0a0a (Negro profundo)
  Texto Principal: #f5f5f5 (Blanco suave)
  Cursor/Accent: #00ff88 (Verde neón)
  Keywords: #0088ff (Azul eléctrico)
  Strings: #00ff88 (Verde brillante)
  Numbers: #ffdd00 (Amarillo eléctrico)
  Functions: #ffffff (Blanco puro)
  Classes: #00ffdd (Cyan brillante)
  Comments: #555555 (Gris sutil)
  
  === FILOSOFÍA DEL DISEÑO ===
  
  1. MINIMALISMO: Solo los colores esenciales
  2. BRUTALISMO: Contrastes fuertes y decisivos
  3. MODERNIDAD: Paleta tecnológica y futurista
  4. ELEGANCIA: Combinaciones armoniosas
  5. LIMPIEZA: Sin ruido visual innecesario
*/
