import { Inter, Funnel_Display } from "next/font/google";
import "./globals.css";


const funnel = Funnel_Display({
  variable: "--font-funnel",
  subsets: ["latin"],
});

export const metadata = {
  title: "Masad Rayan ",
  description: "Portfolio of Masad Rayan, a passionate MERN Stack & Full Stack Developer specializing in modern web solutions.",
  icons: {
    icon: '/logo.ico',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${funnel.variable} antialiased funnel-display`}
      >
        {children}
      </body>
    </html>
  );
}
