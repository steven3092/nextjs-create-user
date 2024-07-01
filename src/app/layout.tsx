import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import ReactQueryProvider from "./utils/react-query-provider";
// import { server } from "./mocks/node";
// import { MockProvider } from "./utils/mock-provider";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // if (process.env.NODE_ENV == "development") {
  //   server.listen();

  //   const response = await fetch("http://127.0.0.1:8000/users");
  //   const user = await response.json();
  //   console.log(user);
  // }

  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
