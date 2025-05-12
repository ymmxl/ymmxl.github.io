import "./globals.css";
import { Space_Mono } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { ColorProvider } from "@/components/color-provider";
const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});

export const metadata = {
  title: "ymmxl | Creative Designer & Developer",
  description: "Portfolio of a multidisciplinary designer and developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${spaceMono.variable}`}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ColorProvider>
            {children}
          </ColorProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}