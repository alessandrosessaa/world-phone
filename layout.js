import "./globals.css";

export const metadata = {
  title: "World phone | Reparación de móviles en Pamplona",
  description: "Reparación rápida de móviles, accesorios y servicios de telefonía en Pamplona."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
