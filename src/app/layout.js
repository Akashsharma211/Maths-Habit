import './globals.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata = {
  title: 'Anu Mam Classes | Premier Cambridge & Edexcel IGCSE Mathematics Specialist',
  description: 'Join Ms. Anu\'s premier global live interactive classes for Cambridge IGCSE (0580 & 0606), Edexcel IGCSE & Cambridge Lower Secondary Checkpoint. Experience 0-fear conceptual clarity and guaranteed A* results.',
  keywords: 'Anu Mam, IGCSE Mathematics, Cambridge IGCSE 0580, IGCSE Additional Math 0606, Edexcel IGCSE Math, Cambridge Checkpoint Math, IGCSE Math Tutor, IGCSE Online Tuition, Cambridge Lower Secondary',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
