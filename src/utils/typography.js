import Typography from 'typography';
import fairyGates from 'typography-theme-fairy-gates';

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: 'Montserrat',
      styles: [
        '700',
      ],
    },
    {
      name: 'Glass Antiqua',
      styles: [
        '400',
        '400i',
        '700',
        '700i',
      ],
    },
  ],
  headerFontFamily: [
    "Glass Antiqua"
  ],
  bodyFontFamily: ["Montserrat"],
});

export default typography;
