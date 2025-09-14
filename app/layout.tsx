import '@/app/global.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '../contexts/ThemeContext';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.className} suppressHydrationWarning>
      <head>
        <title>Portafolio de Milagros Cancela - Ingeniería de Datos</title>
        <meta name="description" content="Portafolio personal de Milagros Cancela - Ingeniería de Datos con proyectos, apuntes y documentación" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
