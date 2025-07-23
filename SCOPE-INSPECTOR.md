# Carbon Code Theme - TextMate Scope Inspector

## 🔍 Debugging TextMate Scopes

When working with or customizing Carbon Code Theme, it's useful to see exactly which TextMate scopes are being used for specific code elements.

### How to Inspect TextMate Scopes

1. Open VS Code with Carbon Code Theme applied
2. Open your keybindings.json file (Ctrl+K Ctrl+S, then click the JSON icon in the top right)
3. Add the following keybinding:

```json
{
  "key": "ctrl+alt+shift+i",
  "command": "editor.action.inspectTMScopes"
}
```

4. Now you can place your cursor on any code element and press `Ctrl+Alt+Shift+I`
5. A popup will show the TextMate scopes associated with that code element

### Example TextMate Scope Hierarchy

```
- source.dart
  - meta.declaration.class.dart
    - storage.type.class.dart (class)
    - entity.name.type.class.dart (MyWidget)
  - meta.declaration.method.dart
    - entity.name.function.dart (build)
```

### Using Scope Information for Theme Customization

Once you identify the scope of an element you want to customize, you can add a new entry to any theme file's `tokenColors` array:

```json
{
  "name": "My Custom Element",
  "scope": ["entity.name.type.class.dart"],
  "settings": {
    "foreground": "#ff0000",
    "fontStyle": "bold"
  }
}
```

### Common TextMate Scopes by Language

#### Dart/Flutter

- `entity.name.type.class.dart`: Class names
- `entity.name.function.dart`: Methods and functions
- `storage.type.primitive.dart`: Built-in types
- `variable.other.dart`: Variables
- `support.class.dart`: Library classes

#### TypeScript/JavaScript

- `entity.name.type.ts`: TypeScript types
- `entity.name.function.ts`: Function names
- `variable.other.object.ts`: Object variables
- `entity.name.tag.js.jsx`: JSX tag names

#### Python

- `entity.name.function.python`: Function names
- `support.type.python`: Built-in types
- `variable.parameter.function.python`: Function parameters

#### Go

- `entity.name.function.go`: Function names
- `variable.other.go`: Variables
- `storage.type.go`: Types

## 🔧 Custom Theme Settings

You can add custom token colors to your settings.json file to override any default theme colors:

```json
"editor.tokenColorCustomizations": {
  "[Carbon Code Dark]": {
    "textMateRules": [
      {
        "scope": "entity.name.function.dart",
        "settings": {
          "foreground": "#00ff88"
        }
      }
    ]
  }
}
```

This technique allows you to customize any language's syntax highlighting without modifying the theme files directly.
