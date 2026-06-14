import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageName from "@/components/PageName";
import Sidebar from "@/components/Sidebar";
import { ThemeProvider } from "@/context/ThemeContext";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import { themeScript } from "./theme-script";

const firaCode = Fira_Code({
  variable: "--font-fira-code-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Vscode Portfolio",
  description: "Personal information of me",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" scroll-smooth">
      <body
        className={`${firaCode.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <ThemeProvider>
          <div className="h-screen">
            <Navbar />

            <div>
              <Sidebar />
              <main>
                <PageName />
                <div className="md:ml-auto w-full md:w-3/4 px-2 relative overflow-y-auto">
                  {children}
                </div>
              </main>
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
