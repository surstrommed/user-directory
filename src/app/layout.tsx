import "./globals.css";
import Header from "@components/header/Header";
import { PROJECT_NAME } from "@consts/index";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `React SSR | ${PROJECT_NAME}`,
  viewport: "initial-scale=1.0, width=device-width",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        <main style={{ margin: "3rem 0" }}>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
