import "./globals.css";
import "@mantine/core/styles.css";
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import { RootStyleRegistry } from "./EmotionRootStyleRegistry";
import { emotionTransform, MantineEmotionProvider } from "@mantine/emotion";

export const metadata = {
  title: "Lift Monitor",
  description: "Log your lifts and track your progress",
};

// Define your custom colors as 10-shade arrays
const customColors = {
  night: Array(10).fill("#131515"),
  jet: Array(10).fill("#2b2c28"),
  persian: Array(10).fill("#339989"),
  tiffany: Array(10).fill("#7de2d1"),
  snow: Array(10).fill("#fffafb"),
  modern: Array(10).fill("#e5e7eb"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <RootStyleRegistry>
          <MantineEmotionProvider>
            <MantineProvider
              theme={{
                colors: customColors,
                primaryColor: "persian", // optional
              }}
              withGlobalStyles
              withNormalizeCSS
              stylesTransform={emotionTransform}
            >
              {children}
            </MantineProvider>
          </MantineEmotionProvider>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
