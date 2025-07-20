# SazarDev Brutal Minimal Theme - Build Script
# Ejecuta este script para empaquetar y publicar el tema

Write-Host "🎨 SazarDev Brutal Minimal Theme - Build & Publish" -ForegroundColor Green
Write-Host "=================================================" -ForegroundColor Green

# Verificar si vsce está instalado
Write-Host "`n📦 Verificando herramientas..." -ForegroundColor Yellow
try {
    $vsceVersion = vsce --version
    Write-Host "✅ vsce v$vsceVersion encontrado" -ForegroundColor Green
} catch {
    Write-Host "❌ vsce no está instalado. Instalando..." -ForegroundColor Red
    npm install -g @vscode/vsce
    Write-Host "✅ vsce instalado correctamente" -ForegroundColor Green
}

# Limpiar archivos anteriores
Write-Host "`n🧹 Limpiando archivos anteriores..." -ForegroundColor Yellow
Get-ChildItem -Path "." -Filter "*.vsix" | Remove-Item -Force
Write-Host "✅ Archivos .vsix eliminados" -ForegroundColor Green

# Validar package.json
Write-Host "`n🔍 Validando configuración..." -ForegroundColor Yellow
$packageJson = Get-Content "package.json" -Raw | ConvertFrom-Json

if (-not $packageJson.publisher) {
    Write-Host "⚠️  No se encontró publisher en package.json" -ForegroundColor Yellow
    $publisher = Read-Host "Ingresa tu publisher ID"
    $packageJson.publisher = $publisher
    $packageJson | ConvertTo-Json -Depth 10 | Set-Content "package.json"
    Write-Host "✅ Publisher agregado: $publisher" -ForegroundColor Green
}

Write-Host "📋 Información del paquete:" -ForegroundColor Cyan
Write-Host "   Nombre: $($packageJson.name)" -ForegroundColor White
Write-Host "   Versión: $($packageJson.version)" -ForegroundColor White
Write-Host "   Publisher: $($packageJson.publisher)" -ForegroundColor White
Write-Host "   Display Name: $($packageJson.displayName)" -ForegroundColor White

# Empaquetar extensión
Write-Host "`n📦 Empaquetando extensión..." -ForegroundColor Yellow
try {
    vsce package
    $packageFile = Get-ChildItem -Path "." -Filter "*.vsix" | Select-Object -First 1
    Write-Host "✅ Paquete creado: $($packageFile.Name)" -ForegroundColor Green
} catch {
    Write-Host "❌ Error al empaquetar: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}

# Mostrar opciones
Write-Host "`n🚀 ¿Qué quieres hacer ahora?" -ForegroundColor Yellow
Write-Host "1. Instalar localmente para probar" -ForegroundColor White
Write-Host "2. Publicar en VS Code Marketplace" -ForegroundColor White
Write-Host "3. Solo empaquetar (ya completado)" -ForegroundColor White
Write-Host "4. Abrir VS Code para probar" -ForegroundColor White

$choice = Read-Host "`nElige una opción (1-4)"

switch ($choice) {
    "1" {
        Write-Host "`n🔧 Instalando extensión localmente..." -ForegroundColor Yellow
        code --install-extension $packageFile.Name
        Write-Host "✅ Extensión instalada. Reinicia VS Code y ve a Settings > Color Theme" -ForegroundColor Green
    }
    "2" {
        Write-Host "`n🌐 Publicando en VS Code Marketplace..." -ForegroundColor Yellow
        Write-Host "⚠️  Asegúrate de tener un Personal Access Token configurado" -ForegroundColor Yellow
        $confirm = Read-Host "¿Continuar con la publicación? (y/N)"
        if ($confirm -eq "y" -or $confirm -eq "Y") {
            try {
                vsce publish
                Write-Host "✅ ¡Tema publicado exitosamente!" -ForegroundColor Green
                Write-Host "🔗 Disponible en: https://marketplace.visualstudio.com/items?itemName=$($packageJson.publisher).$($packageJson.name)" -ForegroundColor Cyan
            } catch {
                Write-Host "❌ Error al publicar: $($_.Exception.Message)" -ForegroundColor Red
                Write-Host "💡 Verifica tu Personal Access Token: vsce login <publisher>" -ForegroundColor Yellow
            }
        } else {
            Write-Host "❌ Publicación cancelada" -ForegroundColor Yellow
        }
    }
    "3" {
        Write-Host "✅ Empaquetado completado. Archivo: $($packageFile.Name)" -ForegroundColor Green
    }
    "4" {
        Write-Host "`n🚀 Abriendo VS Code para probar..." -ForegroundColor Yellow
        Start-Process "code" -ArgumentList "--extensionDevelopmentPath=.", "--new-window"
        Write-Host "✅ VS Code abierto en modo desarrollo" -ForegroundColor Green
        Write-Host "💡 Ve a Command Palette (Ctrl+Shift+P) > 'Preferences: Color Theme' > 'SazarDev Brutal Minimal'" -ForegroundColor Cyan
    }
    default {
        Write-Host "❌ Opción inválida" -ForegroundColor Red
    }
}

Write-Host "`n📋 Archivos del proyecto:" -ForegroundColor Yellow
Get-ChildItem -Path "." | Where-Object { $_.Name -match "\.(json|md|ts|js|css)$|themes" } | ForEach-Object {
    Write-Host "   $($_.Name)" -ForegroundColor White
}

Write-Host "`n🎨 ¡Gracias por usar SazarDev Brutal Minimal Theme!" -ForegroundColor Green
Write-Host "🔗 GitHub: https://github.com/sazardev/brutal-minimal-theme" -ForegroundColor Cyan
Write-Host "📧 Feedback: brutal-theme@sazardev.com" -ForegroundColor Cyan

Write-Host "`n✨ Happy Coding! ✨" -ForegroundColor Magenta
