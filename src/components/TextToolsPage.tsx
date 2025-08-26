'use client';
import { FC, useState } from 'react';
import { marked } from 'marked';
import TurndownService from 'turndown';
import { FiCopy, FiRefreshCw, FiSearch } from 'react-icons/fi';

export interface TextToolsPageProps {
  className?: string;
  theme?: 'dark' | 'light';
}

export const TextToolsPage: FC<TextToolsPageProps> = ({ 
  className = '', 
  theme = 'dark' 
}) => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [conversionType, setConversionType] = useState('markdown-to-html');
  const [findText, setFindText] = useState('');
  const [replaceText, setReplaceText] = useState('');
  const [showFindReplace, setShowFindReplace] = useState(false);
  const [isConverting, setIsConverting] = useState(false);

  const turndownService = new TurndownService();

  const handleConversion = async () => {
    setIsConverting(true);
    try {
      switch (conversionType) {
        case 'markdown-to-html':
          const html = await marked(inputText);
          setOutputText(html);
          break;
        case 'html-to-markdown':
          setOutputText(turndownService.turndown(inputText));
          break;
        case 'markdown-to-text':
          const htmlFromMd = await marked(inputText);
          // Create a temporary DOM element to parse HTML
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = htmlFromMd;
          // Get text content and normalize whitespace
          const plainText = tempDiv.textContent || tempDiv.innerText;
          setOutputText(plainText.trim());
          break;
        case 'text-to-lowercase':
          setOutputText(inputText.toLowerCase());
          break;
        case 'text-to-uppercase':
          setOutputText(inputText.toUpperCase());
          break;
        default:
          setOutputText(inputText);
      }
    } catch (error) {
      console.error('Conversion error:', error);
      setOutputText('Error converting text');
    } finally {
      setIsConverting(false);
    }
  };

  const handleFindReplace = () => {
    if (!findText) return;
    try {
      // Escape special regex characters in the search string
      const escapedFindText = findText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(escapedFindText, 'g');
      const newText = inputText.replace(regex, replaceText);
      setInputText(newText);
    } catch (error) {
      console.error('Invalid regex pattern:', error);
      // Optionally add error handling UI feedback here
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const isDark = theme === 'dark';
  const bgClass = isDark ? 'bg-gray-900' : 'bg-gray-100';
  const textClass = isDark ? 'text-white' : 'text-gray-900';
  const cardBgClass = isDark ? 'bg-gray-800' : 'bg-white';
  const borderClass = isDark ? 'border-gray-700' : 'border-gray-300';

  return (
    <div className={`min-h-screen ${bgClass} py-12 px-4 sm:px-6 lg:px-8 ${className}`}>
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className={`text-4xl font-bold ${textClass} mb-4`}>
          Text Conversion Tools
        </h1>
        <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          Transform your text with our powerful conversion tools
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        {/* Controls */}
        <div className="flex flex-wrap gap-4 mb-6">
          <select
            className={`${cardBgClass} ${textClass} px-4 py-2 rounded-lg border ${borderClass}`}
            value={conversionType}
            onChange={(e) => setConversionType(e.target.value)}
          >
            <option value="markdown-to-html">Markdown to HTML</option>
            <option value="html-to-markdown">HTML to Markdown</option>
            <option value="markdown-to-text">Markdown to Text</option>
            <option value="text-to-lowercase">Text to Lowercase</option>
            <option value="text-to-uppercase">Text to Uppercase</option>
          </select>

          <button
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors duration-300 disabled:opacity-50"
            onClick={handleConversion}
            disabled={isConverting}
          >
            <FiRefreshCw className={isConverting ? 'animate-spin' : ''} /> 
            {isConverting ? 'Converting...' : 'Convert'}
          </button>

          <button
            className={`flex items-center gap-2 ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} ${textClass} px-4 py-2 rounded-lg transition-colors duration-300`}
            onClick={() => setShowFindReplace(!showFindReplace)}
          >
            <FiSearch /> Find & Replace
          </button>
        </div>

        {/* Find & Replace */}
        {showFindReplace && (
          <div className="flex flex-wrap gap-4 mb-6">
            <input
              type="text"
              placeholder="Find"
              className={`${cardBgClass} ${textClass} px-4 py-2 rounded-lg border ${borderClass}`}
              value={findText}
              onChange={(e) => setFindText(e.target.value)}
            />
            <input
              type="text"
              placeholder="Replace"
              className={`${cardBgClass} ${textClass} px-4 py-2 rounded-lg border ${borderClass}`}
              value={replaceText}
              onChange={(e) => setReplaceText(e.target.value)}
            />
            <button
              className={`${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} ${textClass} px-4 py-2 rounded-lg transition-colors duration-300`}
              onClick={handleFindReplace}
            >
              Replace All
            </button>
          </div>
        )}

        {/* Text Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Input */}
          <div className="relative">
            <div className="flex justify-between items-center mb-2">
              <label className={`${textClass} font-semibold`}>Input</label>
              <button
                className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-300`}
                onClick={() => copyToClipboard(inputText)}
              >
                <FiCopy />
              </button>
            </div>
            <textarea
              className={`w-full h-[400px] ${cardBgClass} ${textClass} p-4 rounded-lg border ${borderClass} focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300`}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter your text here..."
            />
          </div>

          {/* Output */}
          <div className="relative">
            <div className="flex justify-between items-center mb-2">
              <label className={`${textClass} font-semibold`}>Output</label>
              <button
                className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-300`}
                onClick={() => copyToClipboard(outputText)}
              >
                <FiCopy />
              </button>
            </div>
            <textarea
              className={`w-full h-[400px] ${cardBgClass} ${textClass} p-4 rounded-lg border ${borderClass}`}
              value={outputText}
              readOnly
              placeholder="Converted text will appear here..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextToolsPage;
