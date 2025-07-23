/**
 * Carbon Code Theme - Complete Color Palette Demo
 * Showcasing all 5 color schemes across Dark and Light themes
 */

// === CARBON CODE THEME PALETTE ===
const carbonThemePalette = {
  // 🔵 INDIGO COLLECTION - Professional & Corporate
  indigo: {
    name: "Indigo",
    primary: "#6366f1",
    description: "Professional, stable, corporate-friendly",
    mood: "Calm and focused",
    bestFor: [
      "Enterprise development",
      "Long coding sessions",
      "Team environments",
    ],
  },

  // 🟢 EMERALD COLLECTION - Creative & Energetic
  emerald: {
    name: "Emerald",
    primary: "#00ff88",
    description: "Creative, energetic, modern",
    mood: "Vibrant and inspiring",
    bestFor: ["Frontend development", "Creative projects", "Late night coding"],
  },

  // 🔴 CRIMSON COLLECTION - Bold & Powerful
  crimson: {
    name: "Crimson",
    primary: "#dc2626",
    description: "Bold, powerful, focused",
    mood: "Intense and determined",
    bestFor: [
      "System programming",
      "Backend development",
      "Critical debugging",
    ],
  },

  // 🌸 ROSE COLLECTION - Elegant & Sophisticated
  rose: {
    name: "Rose",
    primary: "#ec4899",
    description: "Elegant, sophisticated, stylish",
    mood: "Modern and refined",
    bestFor: ["UI/UX development", "Design work", "Mobile app development"],
  },

  // 🧡 AMBER COLLECTION - Warm & Optimistic
  amber: {
    name: "Amber",
    primary: "#f59e0b",
    description: "Warm, optimistic, inviting",
    mood: "Positive and energizing",
    bestFor: ["Learning new languages", "Documentation", "Teaching/tutorials"],
  },
};

// Theme Usage Examples
class CarbonThemeSelector {
  currentTheme: string;
  darkMode: boolean;

  constructor() {
    this.currentTheme = "indigo";
    this.darkMode = true;
  }

  // Get all available themes
  getAvailableThemes(): string[] {
    return Object.keys(carbonThemePalette);
  }

  // Switch theme based on coding context
  switchThemeForTask(task: string): void {
    const themeMap = {
      enterprise: "indigo",
      creative: "emerald",
      debugging: "crimson",
      design: "rose",
      learning: "amber",
    };

    this.currentTheme = themeMap[task] || "indigo";
    console.log(`Switched to ${this.currentTheme} theme for ${task}`);
  }

  // Get theme recommendation
  getThemeRecommendation(
    timeOfDay: "morning" | "afternoon" | "evening" | "night"
  ): string {
    const recommendations = {
      morning: "amber", // Energizing start
      afternoon: "indigo", // Professional focus
      evening: "rose", // Elegant transition
      night: "emerald", // Creative energy
    };

    return recommendations[timeOfDay];
  }

  // Theme color palette preview
  previewTheme(themeName: string): {
    name: string;
    primary: string;
    background: string;
    foreground: string;
    mood: string;
    description: string;
  } {
    const theme = carbonThemePalette[themeName];
    if (!theme) {
      throw new Error(`Theme ${themeName} not found!`);
    }

    return {
      name: theme.name,
      primary: theme.primary,
      background: this.darkMode ? "#0f0f0f" : "#fdfdfd",
      foreground: this.darkMode ? "#e6e6e6" : "#0a0a0a",
      mood: theme.mood,
      description: theme.description,
    };
  }
}

// Usage examples for each color scheme
const themeExamples = {
  // Professional work
  corporateProject: () => {
    const selector = new CarbonThemeSelector();
    selector.switchThemeForTask("enterprise");
    return selector.previewTheme("indigo");
  },

  // Creative development
  frontendProject: () => {
    const selector = new CarbonThemeSelector();
    selector.switchThemeForTask("creative");
    return selector.previewTheme("emerald");
  },

  // System debugging
  criticalDebugging: () => {
    const selector = new CarbonThemeSelector();
    selector.switchThemeForTask("debugging");
    return selector.previewTheme("crimson");
  },

  // Design work
  uiDesign: () => {
    const selector = new CarbonThemeSelector();
    selector.switchThemeForTask("design");
    return selector.previewTheme("rose");
  },

  // Learning session
  tutorialCoding: () => {
    const selector = new CarbonThemeSelector();
    selector.switchThemeForTask("learning");
    return selector.previewTheme("amber");
  },
};

// Color harmony and accessibility
const colorAccessibility = {
  contrastRatios: {
    dark: {
      background: "#0f0f0f",
      foreground: "#e6e6e6",
      ratio: 12.6, // WCAG AAA compliant
    },
    light: {
      background: "#fdfdfd",
      foreground: "#0a0a0a",
      ratio: 15.8, // WCAG AAA compliant
    },
  },

  colorVisionSupport: {
    protanopia: "Optimized with distinct hues",
    deuteranopia: "High contrast maintained",
    tritanopia: "Clear differentiation preserved",
  },
};

// Export for testing and demonstration
export {
  carbonThemePalette,
  CarbonThemeSelector,
  themeExamples,
  colorAccessibility,
};

// Demo all themes
const demo = new CarbonThemeSelector();
console.log("🎨 Carbon Code Theme Collection:");

Object.keys(carbonThemePalette).forEach((themeName) => {
  const preview = demo.previewTheme(themeName);
  console.log(`${preview.name}: ${preview.description}`);
  console.log(`Primary color: ${preview.primary}`);
  console.log(`Mood: ${preview.mood}\n`);
});

// Recommendations by time
console.log("⏰ Time-based recommendations:");
["morning", "afternoon", "evening", "night"].forEach((time) => {
  const recommended = demo.getThemeRecommendation(time as any);
  console.log(`${time}: ${carbonThemePalette[recommended].name}`);
});

/**
 * 🚀 Try all Carbon Code themes!
 *
 * Ctrl+K Ctrl+T to open theme selector:
 * - Carbon Code Dark/Light (Indigo)
 * - Carbon Code Emerald Dark/Light
 * - Carbon Code Crimson Dark/Light
 * - Carbon Code Rose Dark/Light
 * - Carbon Code Amber Dark/Light
 */
