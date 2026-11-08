import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "test",
  description: "DEPLOY Autonomous Build",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}

