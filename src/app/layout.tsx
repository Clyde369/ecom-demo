'use client';
import { CacheProvider } from "@chakra-ui/next-js";
import {  ChakraProvider, theme } from "@chakra-ui/react";
import { Inter } from "next/font/google";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CacheProvider>
          
          <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
