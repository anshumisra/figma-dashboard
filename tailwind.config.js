/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-text-bg-color": "#f5f6fa",
        "color-text-white": "#fff",
        "color-alerts-status-error": "#ef4a00",
        "color-neutral-neutral-200": "#ebecef",
        "color-text-text-primary-light": "#111827",
        gray: "rgba(17, 24, 39, 0.5)",
        "color-text-text-secondary-light": "#4b5563",
        "color-button-button": "#487fff",
        "color-alerts-status-sucess": "#45b369",
        "color-alerts-status-secoundary-color": "#9a35fe",
        "color-alerts-status-info": "#144bd6",
        "color-alerts-status-warning": "#ff9f29",
        "color-button-button-focus": "#e4f1ff",
        goldenrod: "#fca841",
        crimson: "#ef4770",
        darkviolet: "#ba29ff",
        aquamarine: "#47efbd",
        blueviolet: "#9935fe",
        lightgray: "rgba(209, 213, 219, 0.5)",
        mediumseagreen: {
          "100": "rgba(69, 179, 105, 0.2)",
          "200": "rgba(69, 179, 105, 0.1)",
          "300": "rgba(69, 179, 105, 0.15)",
        },
        "color-input-from-input-from-light": "#d1d5db",
        royalblue: "rgba(72, 127, 255, 0.2)",
        "secondary-800": "#133d4f",
        tomato: {
          "100": "rgba(248, 102, 36, 0.2)",
          "200": "rgba(248, 102, 36, 0.1)",
        },
        "neutral-gray-gray-400": "#858d9d",
        "neutral-gray-gray-100": "#e0e2e7",
        "secondary-red-red-500": "#eb3d4d",
        "neutral-gray-gray-500": "#667085",
        "neutral-black-black-500": "#1d1f2c",
        mediumblue: "#6c29fc",
      },
      spacing: {
        "spacing-positive-spacing-4": "8px",
        "spacing-positive-spacing-3": "4px",
        "spacing-positive-spacing-5": "12px",
      },
      fontFamily: {
        "inter-body-md-body-md-semibold": "Inter",
        lineawesome: "LineAwesome",
        "text-s-semibold": "'Public Sans'",
      },
      borderRadius: {
        "21xl": "40px",
        "181xl": "200px",
        "3xs": "10px",
        "81xl": "100px",
        "spacing-positive-spacing-4": "8px",
        "spacing-positive-spacing-3": "4px",
        "spacing-s-8": "8px",
        "spacing-positive-spacing-9": "40px",
        "spacing-positive-spacing-6": "16px",
        "spacing-positive-spacing-2": "2px",
      },
    },
    fontSize: {
      sm: "14px",
      "3xl": "22px",
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      lg: "18px",
      xs: "12px",
      inherit: "inherit",
    },
    screens: {
      mq650: {
        raw: "screen and (max-width: 650px)",
      },
      mq625: {
        raw: "screen and (max-width: 625px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
