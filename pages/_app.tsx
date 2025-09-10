import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { AppProvider } from "@contexts";
import { useEffect } from "react";
import { Header } from "@components";

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // your console.log here
      console.log(
        `%cSandbox Studio - built with Next.js, Tailwind, and a lot of late nights 🌙 `,
        "color: #60a5fa; font-family: monospace; font-size: 12px;"
      );
    }
  }, []);

  return (
    <AppProvider>
      <Header />
      <Component {...pageProps} />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            border: "2px solid #181818",
            padding: "10px",
            color: "#181818",
            backgroundColor: "#F0E3AA",
          },
          iconTheme: {
            primary: "#181818",
            secondary: "#F0E3AA",
          },
        }}
      />
    </AppProvider>
  );
};

export default App;
