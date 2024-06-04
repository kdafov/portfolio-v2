import '@fontsource/open-sans'; 
import "./globals.css";

export const metadata = {
  title: "KD Portfolio",
  description: "A portfolio website of Kristian Dafov",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='font-open-sans'>{children}</body>
    </html>
  );
}
