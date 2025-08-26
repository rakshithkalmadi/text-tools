#!/bin/bash

# Text Tools - Quick Setup Script
# This script helps you quickly set up the text-tools component for development

echo "🚀 Setting up Text Tools for development..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the text-tools root directory"
    exit 1
fi

# Install dependencies for the component
echo "📦 Installing component dependencies..."
npm install

# Create demo directory
echo "🏗️ Creating demo environment..."
mkdir -p demo
cd demo

# Initialize demo project
npm init -y

# Install Next.js and dependencies
echo "📦 Installing demo dependencies..."
npm install next react react-dom typescript @types/react @types/node tailwindcss autoprefixer postcss

# Install the text-tools package locally
npm install ../

# Create Next.js configuration
echo "⚙️ Creating Next.js configuration..."

# Create next.config.js
cat > next.config.js << 'EOF'
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
EOF

# Create tailwind.config.js
cat > tailwind.config.js << 'EOF'
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    '../src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
EOF

# Create postcss.config.js
cat > postcss.config.js << 'EOF'
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
EOF

# Create app directory and files
mkdir -p app

# Create app/layout.tsx
cat > app/layout.tsx << 'EOF'
import './globals.css'

export const metadata = {
  title: 'Text Conversion Tools Demo',
  description: 'Demo of the text conversion tools component',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
EOF

# Create app/page.tsx
cat > app/page.tsx << 'EOF'
import { TextToolsPage } from 'text-conversion-tools';

export default function Home() {
  return <TextToolsPage />;
}
EOF

# Create app/globals.css
cat > app/globals.css << 'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;
EOF

# Update package.json scripts
npm pkg set scripts.dev="next dev"
npm pkg set scripts.build="next build"
npm pkg set scripts.start="next start"

echo "✅ Setup complete!"
echo ""
echo "🎉 To start developing:"
echo "   cd demo"
echo "   npm run dev"
echo ""
echo "📱 Then open http://localhost:3000 in your browser"
echo ""
echo "🛠️ Edit ../src/components/TextToolsPage.tsx to make changes"
