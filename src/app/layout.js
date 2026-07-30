import './globals.css';

export const metadata = {
  title: 'Anu Mam Classes | Master Science & Mathematics with Excellence',
  description: 'Join Anu Mam\'s premier live classes for Class 9-12, JEE, & NEET. Experience conceptual clarity, personalized mentorship, and 98%+ proven success rate.',
  keywords: 'Anu Mam, Physics Teacher, Chemistry Teacher, Mathematics, Class 9, Class 10 Board, Class 12 CBSE, JEE Advanced, NEET Coaching',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
