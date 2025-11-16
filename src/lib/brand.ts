export const brandPalette = {
  denimBlue: "#1E4BAE",
  darkCerulean: "#0F3D7A",
  eerieBlack: "#111827",
  cultured: "#F5F7FA",
  auroMetalSaurus: "#6B7280",
  blueJeans: "#60A5FA",
  limeGreen: "#24D139",
  fireOpal: "#E55555",
} as const;

export const feedbackColors = {
  positive: brandPalette.limeGreen,
  informative: brandPalette.blueJeans,
  warning: brandPalette.fireOpal,
} as const;

export type BrandColor = keyof typeof brandPalette;
