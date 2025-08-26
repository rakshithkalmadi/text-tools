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

## Installation

```bash
npm install text-conversion-tools
```

## Usage

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

### Custom Implementation

```tsx
import { useTextConverter } from 'text-conversion-tools';

function CustomTextTools() {
  const { convert, outputText } = useTextConverter();
  
  const handleConvert = () => {
    convert('markdown-to-html', inputText);
  };
  
  return (
    // Your custom UI here
  );
}
```

## Development

### Running Locally

```bash
# Clone the repository
git clone https://github.com/rakshithkalmadi/text-tools.git
cd text-tools

# Install dependencies
npm install

# Start development server
npm run dev
```

### Building

```bash
npm run build
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Conversion Types Supported

- `markdown-to-html`: Converts Markdown to HTML
- `html-to-markdown`: Converts HTML to Markdown
- `markdown-to-text`: Extracts plain text from Markdown
- `text-to-lowercase`: Converts text to lowercase
- `text-to-uppercase`: Converts text to uppercase

## Dependencies

- `marked`: For Markdown to HTML conversion
- `turndown`: For HTML to Markdown conversion
- `react-icons`: For UI icons
- `react`: Peer dependency
- `react-dom`: Peer dependency
