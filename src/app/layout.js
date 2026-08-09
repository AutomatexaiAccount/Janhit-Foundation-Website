import { Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Preloader from "../components/Preloader";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Home - Janhit Foundation",
  description: "Start donating poor people Charity With Difference Join our monthly giving program to provide consistent support to our initiatives.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${nunitoSans.variable}`}>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
