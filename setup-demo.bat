@echo off
REM Text Tools - Quick Setup Script for Windows
REM This script helps you quickly set up the text-tools component for development

echo 🚀 Setting up Text Tools for development...

REM Check if we're in the right directory
if not exist package.json (
    echo ❌ Error: Please run this script from the text-tools root directory
    exit /b 1
)

REM Install dependencies for the component
echo 📦 Installing component dependencies...
call npm install

REM Create demo directory
echo 🏗️ Creating demo environment...
if not exist demo mkdir demo
cd demo

REM Initialize demo project
call npm init -y

REM Install Next.js and dependencies
echo 📦 Installing demo dependencies...
call npm install next react react-dom typescript @types/react @types/node tailwindcss autoprefixer postcss

REM Install the text-tools package locally
call npm install ../

echo ⚙️ Creating Next.js configuration...

REM Create next.config.js
echo /** @type {import('next').NextConfig} */ > next.config.js
echo const nextConfig = { >> next.config.js
echo   experimental: { >> next.config.js
echo     appDir: true, >> next.config.js
echo   }, >> next.config.js
echo } >> next.config.js
echo. >> next.config.js
echo module.exports = nextConfig >> next.config.js

REM Create tailwind.config.js
echo /** @type {import('tailwindcss').Config} */ > tailwind.config.js
echo module.exports = { >> tailwind.config.js
echo   content: [ >> tailwind.config.js
echo     './app/**/*.{js,ts,jsx,tsx}', >> tailwind.config.js
echo     '../src/**/*.{js,ts,jsx,tsx}', >> tailwind.config.js
echo   ], >> tailwind.config.js
echo   theme: { >> tailwind.config.js
echo     extend: {}, >> tailwind.config.js
echo   }, >> tailwind.config.js
echo   plugins: [], >> tailwind.config.js
echo } >> tailwind.config.js

REM Create postcss.config.js
echo module.exports = { > postcss.config.js
echo   plugins: { >> postcss.config.js
echo     tailwindcss: {}, >> postcss.config.js
echo     autoprefixer: {}, >> postcss.config.js
echo   }, >> postcss.config.js
echo } >> postcss.config.js

REM Create app directory
if not exist app mkdir app

REM Create app/layout.tsx
(
echo import './globals.css'
echo.
echo export const metadata = {
echo   title: 'Text Conversion Tools Demo',
echo   description: 'Demo of the text conversion tools component',
echo }
echo.
echo export default function RootLayout^({
echo   children,
echo }: {
echo   children: React.ReactNode
echo }^) {
echo   return ^(
echo     ^<html lang="en"^>
echo       ^<body^>{children}^</body^>
echo     ^</html^>
echo   ^)
echo }
) > app/layout.tsx

REM Create app/page.tsx
(
echo import { TextToolsPage } from 'text-conversion-tools';
echo.
echo export default function Home^(^) {
echo   return ^<TextToolsPage /^>;
echo }
) > app/page.tsx

REM Create app/globals.css
(
echo @tailwind base;
echo @tailwind components;
echo @tailwind utilities;
) > app/globals.css

REM Update package.json scripts
call npm pkg set scripts.dev="next dev"
call npm pkg set scripts.build="next build"
call npm pkg set scripts.start="next start"

echo ✅ Setup complete!
echo.
echo 🎉 To start developing:
echo    cd demo
echo    npm run dev
echo.
echo 📱 Then open http://localhost:3000 in your browser
echo.
echo 🛠️ Edit ../src/components/TextToolsPage.tsx to make changes
pause
