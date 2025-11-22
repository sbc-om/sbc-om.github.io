# Icons & Logos Usage Guide

This folder contains all necessary sizes for branding, application icons, favicons, and social media images.

## 📁 Folder Structure

```
assets/
├── icons/
│   ├── ios/          # iOS application icons
│   ├── android/      # Android application icons
│   └── web/          # Web and Windows icons
├── favicons/         # Browser favicons
├── social/           # Social media images
├── app-icons/        # General application icons
├── LOGO.svg          # Vector logo (infinite quality)
├── LOGO (1024).png   # High-quality PNG logo
├── site.webmanifest  # Manifest file for PWA
└── browserconfig.xml # Configuration for Internet Explorer
```

---

## 🍎 iOS Icons

**Path:** `icons/ios/`

| File | Size | Usage |
|------|------|-------|
| `icon-180.png` | 180×180 | iPhone App Icon @3x |
| `icon-167.png` | 167×167 | iPad Pro App Icon |
| `icon-152.png` | 152×152 | iPad App Icon @2x |
| `icon-120.png` | 120×120 | iPhone App Icon @2x |
| `icon-87.png` | 87×87 | iPhone App Icon @3x (Settings) |
| `icon-80.png` | 80×80 | iPad App Icon @2x (Settings) |
| `icon-76.png` | 76×76 | iPad App Icon |
| `icon-60.png` | 60×60 | iPhone App Icon @1x |
| `icon-58.png` | 58×58 | iPhone Settings @2x |
| `icon-40.png` | 40×40 | iPad Settings @1x |
| `icon-29.png` | 29×29 | iPhone Settings @1x |
| `icon-20.png` | 20×20 | iPad Notification @1x |

### How to use in iOS:

In `Info.plist` or via Xcode:
```xml
<key>CFBundleIcons</key>
<dict>
    <key>CFBundlePrimaryIcon</key>
    <dict>
        <key>CFBundleIconFiles</key>
        <array>
            <string>icon-180</string>
            <string>icon-167</string>
            <!-- ... -->
        </array>
    </dict>
</dict>
```

---

## 🤖 Android Icons

**Path:** `icons/android/`

| File | Size | Usage |
|------|------|-------|
| `icon-512.png` | 512×512 | Google Play Store |
| `icon-192.png` | 192×192 | xxxhdpi / High-res icon |
| `icon-144.png` | 144×144 | xxhdpi |
| `icon-96.png` | 96×96 | xhdpi |
| `icon-72.png` | 72×72 | hdpi |
| `icon-48.png` | 48×48 | mdpi |

### How to use in Android:

In the `res/` folder of the application:
```
res/
├── mipmap-mdpi/icon.png (48×48)
├── mipmap-hdpi/icon.png (72×72)
├── mipmap-xhdpi/icon.png (96×96)
├── mipmap-xxhdpi/icon.png (144×144)
└── mipmap-xxxhdpi/icon.png (192×192)
```

In `AndroidManifest.xml`:
```xml
<application
    android:icon="@mipmap/icon"
    android:roundIcon="@mipmap/icon">
```

---

## 🌐 Favicons

**Path:** `favicons/`

| File | Size | Usage |
|------|------|-------|
| `favicon.ico` | Multi-size | Main favicon (includes 16×16, 32×32, 48×48) |
| `favicon-16x16.png` | 16×16 | Legacy browsers |
| `favicon-32x32.png` | 32×32 | Modern browsers |
| `favicon-48x48.png` | 48×48 | Bookmarks |
| `favicon-64x64.png` | 64×64 | High quality |

### How to use in HTML:

```html
<!-- In the <head> section of HTML -->
<link rel="icon" type="image/x-icon" href="/favicons/favicon.ico">
<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="48x48" href="/favicons/favicon-48x48.png">
```

---

## 📱 Social Media

**Path:** `social/`

| File | Size | Usage |
|------|------|-------|
| `og-image-1200x1200.png` | 1200×1200 | Open Graph (Square) |
| `og-image-1200x630.png` | 1200×630 | Open Graph (Standard) |
| `twitter-image-600x600.png` | 600×600 | Twitter Card |
| `facebook-share-1200x627.png` | 1200×627 | Facebook Share |
| `linkedin-share-1200x1200.png` | 1200×1200 | LinkedIn Share |

### How to use in HTML:

```html
<!-- Open Graph (Facebook, LinkedIn) -->
<meta property="og:image" content="/social/og-image-1200x630.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:type" content="image/png">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="/social/twitter-image-600x600.png">
```

---

## 💻 Web Icons

**Path:** `icons/web/`

| File | Size | Usage |
|------|------|-------|
| `icon-310.png` | 310×310 | Windows Tile (Large) |
| `icon-256.png` | 256×256 | Desktop shortcut |
| `icon-150.png` | 150×150 | Windows Tile (Medium) |
| `icon-128.png` | 128×128 | Chrome Web Store |
| `icon-70.png` | 70×70 | Windows Tile (Small) |
| `icon-64.png` | 64×64 | Taskbar |
| `icon-32.png` | 32×32 | Toolbar |

### How to use in HTML:

```html
<!-- Apple Touch Icon -->
<link rel="apple-touch-icon" sizes="180x180" href="/icons/ios/icon-180.png">

<!-- Android Chrome -->
<link rel="icon" type="image/png" sizes="192x192" href="/icons/android/icon-192.png">

<!-- Web Manifest -->
<link rel="manifest" href="/site.webmanifest">

<!-- Browser Config (IE/Edge) -->
<meta name="msapplication-config" content="/browserconfig.xml">
```

---

## 📦 General App Icons

**Path:** `app-icons/`

| File | Size | Usage |
|------|------|-------|
| `icon-1024.png` | 1024×1024 | App Store / High Quality |
| `icon-512.png` | 512×512 | Medium quality |
| `icon-384.png` | 384×384 | PWA |
| `icon-192.png` | 192×192 | PWA |
| `icon-128.png` | 128×128 | Desktop |
| `icon-96.png` | 96×96 | Mobile |

---

## 🚀 Progressive Web App (PWA)

### File `site.webmanifest`:

```json
{
  "name": "SBC Brand",
  "short_name": "SBC",
  "icons": [
    {
      "src": "icons/android/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "icons/android/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ],
  "theme_color": "#ffffff",
  "background_color": "#ffffff",
  "display": "standalone"
}
```

### File `browserconfig.xml`:

For Internet Explorer and Edge Legacy support:

```xml
<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
    <msapplication>
        <tile>
            <square70x70logo src="icons/web/icon-70.png"/>
            <square150x150logo src="icons/web/icon-150.png"/>
            <square310x310logo src="icons/web/icon-310.png"/>
            <TileColor>#ffffff</TileColor>
        </tile>
    </msapplication>
</browserconfig>
```

---

## 📋 Complete HTML for All Platforms

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SBC</title>
    
    <!-- Standard Favicon -->
    <link rel="icon" type="image/x-icon" href="/favicons/favicon.ico">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png">
    
    <!-- Apple Touch Icons -->
    <link rel="apple-touch-icon" sizes="180x180" href="/icons/ios/icon-180.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/icons/ios/icon-152.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/icons/ios/icon-120.png">
    
    <!-- Android Chrome -->
    <link rel="icon" type="image/png" sizes="192x192" href="/icons/android/icon-192.png">
    
    <!-- Web App Manifest -->
    <link rel="manifest" href="/site.webmanifest">
    
    <!-- Windows Tiles -->
    <meta name="msapplication-config" content="/browserconfig.xml">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/icons/web/icon-150.png">
    
    <!-- Theme Color -->
    <meta name="theme-color" content="#ffffff">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="SBC">
    <meta property="og:description" content="Company Description">
    <meta property="og:image" content="/social/og-image-1200x630.png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:url" content="https://yourwebsite.com">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="SBC">
    <meta name="twitter:description" content="Company Description">
    <meta name="twitter:image" content="/social/twitter-image-600x600.png">
</head>
<body>
    <!-- Page Content -->
</body>
</html>
```

---

## 🎨 Important Notes

### Image Quality:
- For best quality, use the `LOGO.svg` file (vector).
- For bitmap images, `LOGO (1024).png` is used as the source.

### Optimization:
- All images are PNG and can be compressed with tools like TinyPNG or ImageOptim.
- For web usage, you can also generate WebP format.

### Compatibility:
- These icons are compatible with all major platforms:
  - iOS (iPhone & iPad)
  - Android
  - Windows
  - macOS
  - Modern Browsers
  - PWA

---

## 🔄 Regenerating Icons

If you need to regenerate icons with a new logo, use the following script:

```bash
# Install ImageMagick (if needed)
sudo apt-get install imagemagick  # Ubuntu/Debian
brew install imagemagick          # macOS

# Regenerate all icons
cd /path/to/brand/assets
# Then run the convert commands
```

---

## 📞 Support

If you have questions or need additional sizes, contact the development team.

---

**Created:** November 2025  
**Version:** 1.0.0
