import './globals.css';

export const metadata = {
  title: 'Text Conversion Tools',
  description: 'Convert between Markdown, HTML, and plain text formats',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
