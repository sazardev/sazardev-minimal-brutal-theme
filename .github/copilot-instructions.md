# Copilot Instructions

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

This is a VS Code extension project for creating custom color themes. Please use the get_vscode_api with a query as input to fetch the latest VS Code API references.

## Project Context
- **Project Type**: VS Code Color Theme Extension
- **Extension ID**: clean-code
- **Theme Name**: sazardev
- **Base Theme**: Dark

## Guidelines
- Follow VS Code extension development best practices
- Use semantic color naming for theme tokens
- Ensure accessibility compliance for color contrast
- Maintain consistency across all theme elements
- Test theme with different file types and languages

## Key Files
- `themes/sazardev-color-theme.json`: Main theme definition file
- `package.json`: Extension manifest with theme contribution
- `.vscode/launch.json`: Debug configuration for testing

## Development Notes
- The theme extends the Dark base theme
- Focus on readability and developer experience
- Consider syntax highlighting for popular languages
- Test with both light and dark system preferences
