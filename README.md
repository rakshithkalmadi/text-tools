# Text Conversion Tools

A powerful React component for text conversion tools including Markdown to HTML, HTML to Markdown, text case conversion, and find & replace functionality.

## Features

- **Markdown to HTML**: Convert Markdown text to HTML
- **HTML to Markdown**: Convert HTML back to Markdown
- **Markdown to Text**: Extract plain text from Markdown
- **Case Conversion**: Convert text to uppercase or lowercase
- **Find & Replace**: Advanced find and replace functionality with regex support
- **Copy to Clipboard**: Easy copying of input and output text
- **Real-time Conversion**: Instant conversion as you type

## 🚀 Quick Start - Running Independently

### ⚡ Super Quick Setup (Recommended)

**Use our automated setup scripts for the fastest setup:**

```bash
# Clone the text-tools repository
git clone https://github.com/rakshithkalmadi/text-tools.git
cd text-tools

# Run automated setup script
# For Linux/Mac:
bash setup-demo.sh

# For Windows:
setup-demo.bat

# That's it! Now run:
cd demo
npm run dev
```

Open `http://localhost:3000` and you're ready to develop! 🎉

### Manual Setup Options

### Option 1: Clone and Run Directly
```bash
# Clone the text-tools repository
git clone https://github.com/rakshithkalmadi/text-tools.git
cd text-tools

# Install dependencies
npm install

# Create a simple Next.js wrapper to run the component
npx create-next-app@latest demo --typescript --tailwind --eslint --app --use-npm --no-git
cd demo

# Install the text-tools package locally
npm install ../

# Replace the default page with text tools
```

Create `demo/app/page.tsx`:
```tsx
import { TextToolsPage } from 'text-conversion-tools';

export default function Home() {
  return <TextToolsPage />;
}
```

```bash
# Run the demo
npm run dev
```

### Option 2: Use in Your Existing Project

```bash
# If you want to use it in your existing Next.js/React project
npm install text-conversion-tools

# Or install from GitHub directly
npm install git+https://github.com/rakshithkalmadi/text-tools.git
```

### Option 3: Quick Standalone Demo

Create a new project structure:
```bash
mkdir text-tools-demo
cd text-tools-demo
npm init -y
npm install next react react-dom typescript @types/react @types/node tailwindcss autoprefixer postcss
npm install git+https://github.com/rakshithkalmadi/text-tools.git
```

Create the App Router structure:
```bash
mkdir -p app
```

Create `app/page.tsx`:
```tsx
import { TextToolsPage } from 'text-conversion-tools';

export default function Home() {
  return <TextToolsPage />;
}
```

Create `app/layout.tsx`:
```tsx
import './globals.css'

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
```

Create `app/globals.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Create `tailwind.config.js`:
```js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './node_modules/text-conversion-tools/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add to `package.json`:
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }
}
```

```bash
npm run dev
```

## 📦 Installation for Production Use

```bash
npm install text-conversion-tools
```

## 🛠️ Available Scripts

This repository includes helpful scripts to get you started quickly:

- `npm run setup-demo` - Runs the automated setup script (Linux/Mac)
- `npm run setup-demo-windows` - Runs the automated setup script (Windows)

Or run the scripts directly:
- `bash setup-demo.sh` (Linux/Mac)
- `setup-demo.bat` (Windows)

## 🛠️ Usage

### As a Standalone Component

```tsx
import { TextToolsPage } from 'text-conversion-tools';

function App() {
  return (
    <div>
      <TextToolsPage />
    </div>
  );
}
```

### With Custom Styling

```tsx
import { TextToolsPage } from 'text-conversion-tools';

function App() {
  return (
    <TextToolsPage className="your-custom-classes" />
  );
}
  );
}
```

## 🏗️ Development

### 🚀 Quick Development Setup (Automated)

**The fastest way to start developing:**

```bash
# Clone the repository
git clone https://github.com/rakshithkalmadi/text-tools.git
cd text-tools

# Use the automated setup script
bash setup-demo.sh    # Linux/Mac
# OR
setup-demo.bat        # Windows

cd demo
npm run dev
```

Visit `http://localhost:3000` to see the text tools in action!

### Manual Development Setup

### Running Locally for Development

```bash
# Clone the repository
git clone https://github.com/rakshithkalmadi/text-tools.git
cd text-tools

# Install dependencies (for the component itself)
npm install

# Create a quick demo environment:
mkdir demo && cd demo
npm init -y
npm install next react react-dom typescript @types/react @types/node tailwindcss autoprefixer postcss
npm install ../

# Create demo/app/page.tsx
```

Create `demo/app/page.tsx`:
```tsx
import { TextToolsPage } from 'text-conversion-tools';

export default function Home() {
  return <TextToolsPage />;
}
```

Create `demo/app/layout.tsx`:
```tsx
import './globals.css'

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
```

Create `demo/app/globals.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Create `demo/tailwind.config.js`:
```js
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
```

Add to `demo/package.json` scripts:
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }
}
```

```bash
# Run the demo
cd demo
npm run dev
```

Visit `http://localhost:3000` to see the text tools in action!

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Set up the demo environment (see Development section above)
4. Make your changes to `src/components/TextToolsPage.tsx`
5. Test your changes using `npm run dev` in the demo folder
6. Commit your changes (`git commit -m 'Add some amazing feature'`)
7. Push to the branch (`git push origin feature/amazing-feature`)
8. Open a Pull Request

## 📋 Requirements

- React 18+ or 19+
- Node.js 18+
- Tailwind CSS (for styling)

## 🎯 Conversion Types Supported

- `markdown-to-html`: Converts Markdown to HTML using marked
- `html-to-markdown`: Converts HTML to Markdown using turndown
- `markdown-to-text`: Extracts plain text from Markdown
- `text-to-lowercase`: Converts text to lowercase
- `text-to-uppercase`: Converts text to uppercase

## 📦 Dependencies

- `marked`: For Markdown to HTML conversion
- `turndown`: For HTML to Markdown conversion
- `react-icons`: For UI icons

## 🔧 Peer Dependencies

- `react`: ^18.0.0 || ^19.0.0
- `react-dom`: ^18.0.0 || ^19.0.0

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Team Collaboration

This component is designed to be worked on independently. Each team member can:

1. **Clone and run locally** using the Quick Start guide above
2. **Make changes** to the component in `src/components/TextToolsPage.tsx`
3. **Test changes** using the demo setup
4. **Submit pull requests** for review

**No need to access the main HashInverse repository!** This text-tools package is completely self-contained.
