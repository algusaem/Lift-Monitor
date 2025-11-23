import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/charts/styles.css";

import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import { MantineEmotionProvider, emotionTransform } from "@mantine/emotion";
import { Notifications } from "@mantine/notifications";
import { RootStyleRegistry } from "./EmotionRootStyleRegistry";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const customColors = {
  night: Array(10).fill("#131515"),
  jet: Array(10).fill("#2b2c28"),
  persian: Array(10).fill("#339989"),
  tiffany: Array(10).fill("#7de2d1"),
  snow: Array(10).fill("#fffafb"),
  modern: Array(10).fill("#e5e7eb"),
};

export const metadata = {
  title: "Lift Monitor",
  description: "Log your lifts and track your progress",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable} {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <RootStyleRegistry>
          <MantineEmotionProvider>
            <MantineProvider
              theme={{
                fontFamily: "var(--font-inter)",
                colors: customColors,
                primaryColor: "persian",
              }}
              withGlobalStyles
              withNormalizeCSS
              stylesTransform={emotionTransform}
            >
              <Notifications />
              {children}
            </MantineProvider>
          </MantineEmotionProvider>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
