import localFont from "next/font/local";

export const Inter = localFont({
  src: [
    {
      path: "../public/fonts/Inter_18pt-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter_18pt-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter_18pt-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter_18pt-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/Inter_18pt-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter_18pt-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter_18pt-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter_18pt-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});
