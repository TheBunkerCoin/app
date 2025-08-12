# BunkerCoin App

BunkerCoin App for mobile (iOS/Android), web, desktop, and as a browser extension.

## Targets
- **Mobile**: React Native via Expo (iOS/Android)
- **Web**: `react-native-web` (Expo web)
- **Desktop**: Tauri wrapping the web build (macOS/Windows/Linux)
- **Browser extension**: Vite + React, `react-native` → `react-native-web`

## Stack
- **Monorepo**: Turborepo + Bun workspaces
- **UI primitives**: React Native + `react-native-web`
- **Routing**: Expo Router (mobile/web)
- **Desktop shell**: Tauri (Rust backend, webview frontend)
- **Extension tooling**: Vite + TypeScript

## Planned structure
```
apps/
  mobile/        # Expo app (mobile + web)
  desktop/       # Tauri shell loading web build
  extension/     # Vite + React extension (RN Web alias)
packages/
  ui/            # Shared RN/RNW component library (design system)
  utils/         # Shared TypeScript logic
  config/        # Shared ESLint/Prettier configs
  tsconfig/      # Base tsconfig + target-specific extends
turbo.json
package.json     # bun workspaces
```

## Prerequisites
- Bun (`curl -fsSL https://bun.sh/install | bash`)
- Node.js LTS (optional, some CLIs still expect Node)
- Xcode + iOS Simulator (macOS) and/or Android SDK for mobile
- Rust toolchain (for Tauri): `curl https://sh.rustup.rs -sSf | sh`