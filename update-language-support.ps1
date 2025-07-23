# Add Enhanced Language Support to Theme Files
# This script adds improved syntax highlighting for multiple languages to all theme files

$enhancedTokens = Get-Content -Path ".\themes\enhanced-language-support.json" -Raw | ConvertFrom-Json

# Get all theme files
$themeFiles = Get-ChildItem -Path ".\themes" -Filter "*.json" | Where-Object { $_.Name -ne "enhanced-language-support.json" -and $_.Name -ne "sazardev-color-theme.json" }

foreach ($themeFile in $themeFiles) {
    Write-Host "Updating $($themeFile.Name)..."
    
    # Read the theme file
    $theme = Get-Content -Path $themeFile.FullName -Raw | ConvertFrom-Json
    
    # Check if the theme has tokenColors
    if ($null -ne $theme.tokenColors) {
        # Add each enhanced token color to the theme
        foreach ($token in $enhancedTokens.enhancedTokenColors) {
            # Check if a similar token already exists (by name)
            $existingToken = $theme.tokenColors | Where-Object { $_.name -eq $token.name }
            
            if ($null -eq $existingToken) {
                # Token doesn't exist, add it
                $theme.tokenColors += $token
            }
        }
        
        # Save the updated theme
        $theme | ConvertTo-Json -Depth 10 | Set-Content -Path $themeFile.FullName
        Write-Host "Updated $($themeFile.Name) with enhanced language support"
    } else {
        Write-Host "Warning: $($themeFile.Name) doesn't have tokenColors section"
    }
}

Write-Host "Done! All theme files have been updated with enhanced language support."
