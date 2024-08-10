import "./globals.scss";
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
 
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={
        roboto.className + " bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900"
      }>{children}</body>
    </html>
  );
}
