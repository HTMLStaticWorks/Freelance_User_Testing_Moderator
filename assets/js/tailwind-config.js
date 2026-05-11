window.tailwind = window.tailwind || {};
window.tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        research: {
          primary: "#4F46E5",
          secondary: "#06B6D4"
        }
      },
      fontFamily: {
        display: ["Sora", "Inter", "ui-sans-serif", "system-ui"],
        sans: ["Inter", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        soft: "0 20px 70px rgba(15, 23, 42, 0.12)",
        neon: "0 0 30px rgba(6, 182, 212, 0.25)"
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        pulseLine: "pulseLine 2.8s ease-in-out infinite",
        slideMeter: "slideMeter 1.8s ease-out both"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" }
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.35", transform: "scaleX(0.88)" },
          "50%": { opacity: "1", transform: "scaleX(1)" }
        },
        slideMeter: {
          "0%": { width: "0%" },
          "100%": { width: "var(--meter-width)" }
        }
      }
    }
  }
};
