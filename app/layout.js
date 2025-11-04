import "./globals.css";
import GlobalContext from "./components/GlobalContext";

export const metadata = {
  title: 'Outdoor Credit Inc - RTO Application',
  description: 'Apply easily for Outdoor Credit Inc RTO services.',
  icons: {
    icon: [
      { url: '/Logo.png', type: 'image/png', sizes: '512x512' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-segoe antialiased">
        <GlobalContext>{children}</GlobalContext>
      </body>
    </html>
  );
}

