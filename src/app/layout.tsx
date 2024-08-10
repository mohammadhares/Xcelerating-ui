"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Roboto } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { NextFont } from "next/dist/compiled/@next/font";
import 'react-toastify/dist/ReactToastify.css';


const roboto = Roboto({
  weight: '400',
  style: 'normal',
  display: 'swap',
  subsets: ['latin']
});

// Define a custom interface extending NextFont
interface CustomFont extends NextFont {
  className: string; // Add className property
}
// Cast roboto to CustomFont to ensure it has the className property
const customRoboto = roboto as CustomFont;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${customRoboto.className}`}>
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          pauseOnHover
          theme="dark"
        />
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers"; import { ToastContainer } from "react-toastify";

