# Copilot Instructions

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

This is a VS Code extension project for creating custom color themes. Please use the get_vscode_api with a query as input to fetch the latest VS Code API references.

## Project Context
- **Project Type**: VS Code Color Theme Extension
- **Extension ID**: carbon-code-theme
- **Theme Name**: Carbon Code
- **Variants**: Dark and Light themes in two color schemes
- **Color Schemes**: Indigo (#6366f1) and Emerald (#00ff88)
- **Brand Colors**: Professional indigo, Vibrant emerald, Clean whites/blacks

## Design Philosophy
- **Minimal**: Clean, distraction-free interface
- **Professional**: Suitable for any work environment  
- **Focused**: Optimized for developer productivity
- **Accessible**: High contrast and readable typography

## Guidelines
- Follow VS Code extension development best practices
- Maintain consistency with Carbon brand colors
- Ensure accessibility compliance for color contrast
- Focus on readability and developer experience
- Test theme with multiple file types and languages

## Key Files
- `themes/carbon-dark-theme.json`: Dark theme with indigo accents
- `themes/carbon-light-theme.json`: Light theme with indigo accents
- `themes/carbon-emerald-dark-theme.json`: Dark theme with emerald accents  
- `themes/carbon-emerald-light-theme.json`: Light theme with emerald accents
- `package.json`: Extension manifest with theme contribution
- `.vscode/launch.json`: Debug configuration for testing

## Color Palette
- **Primary Indigo**: #6366f1 (Professional, calm)
- **Primary Emerald**: #00ff88 (Vibrant, energetic)
- **Dark Background**: #0f0f0f
- **Light Background**: #fdfdfd
- **Dark Text**: #e6e6e6
- **Light Text**: #0a0a0a
- **Base Themes**: Dark (`vs-dark`) and Light (`vs`)

## Brand Identity
- **Name**: Flux Code Theme
- **Tagline**: "Where modern design meets productive coding"
- **Philosophy**: Modern, minimal, elegant, professional
- **Target Audience**: Professional developers, productivity-focused programmers

## Color Palette
- **Primary Accent**: `#00d9cc` (Professional Teal)
- **Background Dark**: `#0f0f0f` (Deep comfortable black)
- **Background Light**: `#fdfdfd` (Clean white)
- **Text Dark**: `#e6e6e6` (High contrast white)
- **Text Light**: `#0a0a0a` (Sharp black)

## Guidelines
- Follow VS Code extension development best practices
- Use semantic color naming for theme tokens
- Ensure accessibility compliance (WCAG AA)
- Maintain consistency across Dark and Light variants
- Test theme with different file types and languages
- Focus on professional, commercial-ready aesthetics

## Key Files
- `themes/flux-code-dark-theme.json`: Dark theme definition
- `themes/flux-code-light-theme.json`: Light theme definition  
- `package.json`: Extension manifest with theme contribution
- `.vscode/launch.json`: Debug configuration for testing

## Development Notes
- The theme should be suitable for enterprise environments
- Focus on readability and developer productivity
- Consider syntax highlighting for popular languages
- Test with both color vision accessibility
- Maintain professional branding throughout
