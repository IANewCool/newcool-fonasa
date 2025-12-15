import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NewCool FONASA - Fondo Nacional de Salud",
  description: "Aprende sobre FONASA: tramos, GES/AUGE, modalidades de atencion, beneficios y servicios del sistema publico de salud de Chile.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🏥</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
