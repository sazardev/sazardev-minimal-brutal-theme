/**
 * Carbon Code Theme - Color Variants Demo
 * Showcasing the Indigo and Emerald color schemes
 */

// Color palette definitions
const themeVariants = {
    // Original Carbon themes with Indigo accents
    carbon: {
        dark: {
            name: 'Carbon Code Dark',
            primary: '#6366f1',    // Professional indigo
            background: '#0f0f0f', // Deep black
            foreground: '#e6e6e6', // Warm white
            accent: '#0ea5e9'      // Sky blue
        },
        light: {
            name: 'Carbon Code Light',
            primary: '#6366f1',    // Professional indigo
            background: '#fdfdfd', // Clean white
            foreground: '#0a0a0a', // Sharp black
            accent: '#0ea5e9'      // Sky blue
        }
    },

    // New Emerald themes with green accents
    emerald: {
        dark: {
            name: 'Carbon Code Emerald Dark',
            primary: '#00ff88',    // Vibrant emerald
            background: '#0f0f0f', // Deep black
            foreground: '#e6e6e6', // Warm white
            accent: '#22d3ee'      // Cyan blue
        },
        light: {
            name: 'Carbon Code Emerald Light',
            primary: '#00ff88',    // Vibrant emerald
            background: '#fdfdfd', // Clean white
            foreground: '#0a0a0a', // Sharp black
            accent: '#22d3ee'      // Cyan blue
        }
    }
};

// Theme generation function
class ThemeGenerator {
    constructor(variant: 'carbon' | 'emerald', mode: 'dark' | 'light') {
        this.variant = variant;
        this.mode = mode;
        this.config = themeVariants[variant][mode];
    }

    private variant: 'carbon' | 'emerald';
    private mode: 'dark' | 'light';
    private config: any;

    // Generate VS Code theme configuration
    generateTheme(): object {
        const colors = this.config;

        return {
            name: colors.name,
            type: this.mode,
            colors: {
                // Editor core
                'editor.background': colors.background,
                'editor.foreground': colors.foreground,
                'editorCursor.foreground': colors.primary,

                // Activity bar
                'activityBarBadge.background': colors.primary,
                'activityBar.activeBorder': colors.primary,

                // Tabs
                'tab.activeBorderTop': colors.primary,

                // Terminal
                'terminal.ansiGreen': colors.primary,

                // And many more...
            },
            tokenColors: [
                // Syntax highlighting rules would go here
            ]
        };
    }

    // Export theme as JSON string
    exportTheme(): string {
        const theme = this.generateTheme();
        return JSON.stringify(theme, null, 2);
    }

    // Get theme info
    getInfo(): string {
        const { name, primary } = this.config;
        return `${name} - Primary color: ${primary}`;
    }
}

// Demo usage
const themes = [
    new ThemeGenerator('carbon', 'dark'),
    new ThemeGenerator('carbon', 'light'),
    new ThemeGenerator('emerald', 'dark'),
    new ThemeGenerator('emerald', 'light')
];

// Show all available themes
themes.forEach(theme => {
    console.log(theme.getInfo());
});

// Example: Generate Emerald Dark theme
const emeraldDark = new ThemeGenerator('emerald', 'dark');
const themeJson = emeraldDark.exportTheme();

console.log('Generated theme:', themeJson);

export { ThemeGenerator, themeVariants };
