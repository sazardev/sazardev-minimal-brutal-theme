/**
 * Carbon Code Theme Demo
 * Clean, minimal, professional theme for VS Code
 */

interface CarbonTheme {
    name: string;
    type: 'dark' | 'light';
    colors: ThemeColors;
}

type ThemeColors = {
    primary: string;
    background: string;
    foreground: string;
    accent: string;
};

class CarbonCodeTheme {
    private readonly config: CarbonTheme;

    constructor(type: 'dark' | 'light') {
        this.config = {
            name: `Carbon Code ${type}`,
            type,
            colors: this.getColorPalette(type)
        };
    }

    private getColorPalette(type: 'dark' | 'light'): ThemeColors {
        return type === 'dark'
            ? {
                primary: '#6366f1',    // Professional indigo
                background: '#0f0f0f', // Deep black
                foreground: '#e6e6e6', // Warm white
                accent: '#0ea5e9'      // Sky blue
            }
            : {
                primary: '#6366f1',    // Professional indigo
                background: '#fdfdfd', // Clean white
                foreground: '#0a0a0a', // Sharp black
                accent: '#0ea5e9'      // Sky blue
            };
    }

    public getTheme(): CarbonTheme {
        return this.config;
    }

    // Method with syntax highlighting demo
    public async generateTheme(): Promise<string> {
        const colors = this.config.colors;

        console.log(`Generating ${this.config.name} theme...`);

        try {
            const theme = {
                name: this.config.name,
                type: this.config.type,
                colors: {
                    'editor.background': colors.background,
                    'editor.foreground': colors.foreground,
                    'editorCursor.foreground': colors.primary,
                    // ... more theme definitions
                }
            };

            return JSON.stringify(theme, null, 2);
        } catch (error) {
            throw new Error(`Failed to generate theme: ${error.message}`);
        }
    }
}

// Usage example
const darkTheme = new CarbonCodeTheme('dark');
const lightTheme = new CarbonCodeTheme('light');

export { CarbonCodeTheme, type CarbonTheme, type ThemeColors };
