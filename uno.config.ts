import { defineConfig, presetIcons, presetTypography, presetWebFonts, presetWind4 } from "unocss";

export default defineConfig({
  presets: [
    presetWind4({
      dark: "media",
    }),
    presetTypography(),
    presetWebFonts({
      provider: "bunny",
      fonts: {
        "sans": ["Space Grotesk:400;700"],
        "title": ["Fascinate Inline:400"],
      },
    }),
    presetIcons({
      collections: {
        solar: async () => {
          return (await import("@iconify-json/solar/icons.json", {
            with: { type: "json" },
          })).default;
        },
      },
    }),
  ],
});
