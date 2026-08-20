import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import {NextFontWithVariable} from "next/dist/compiled/@next/font";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const montserrat:NextFontWithVariable = Montserrat({
  variable: "--font-montserrat",
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Clínica Odontológica",
  description: "Agende sua consulta na Clínica Odontológica. Atendimento humanizado, tecnologia de ponta e cuidado completo para você e sua família.",
  keywords: ['clínica odontológica', 'odontologia', 'dentista', 'saúde bucal', 'agendamento on-line'],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
