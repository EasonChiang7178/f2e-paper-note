export const COLOR = Object.freeze({
  GARY: "#C3C3BB",
  DARK_BEIGE: "#E2DFDB",
  BEIGE: "#E8E6E4",
  LIGHT_BEIGE: "#F0ECE8",
  TRANSPARENT_WHITE: "rgba(255,255,255,.7)",
  LIGHT_BLACK: "#505260",
  BLACK: "#221B16",
  WHITE: "#FFFFFF",

  LIGHT_BLUE: "#1f2a39",
  DARK_BLUE: "#171d26",
  BLUE: "#0a284f",
  BLUE_2: "#0f2848",
  TRANSPARENT_BLACK: "rgba(23, 29, 38, .7)",
  BEIGE_2: "#d1bfa4",
  GARY_BLUE: "#717d8e"
});

export const THEME = Object.freeze({
  "LIGHT": Object.freeze({
    BACKGROUND: COLOR.GARY,
    MAIN_PANEL: COLOR.TRANSPARENT_WHITE,
    GROUP_PANEL: COLOR.BEIGE,
    NOTE_BOX: COLOR.WHITE,
    NOTE_BOX_HEADER: COLOR.TRANSPARENT_WHITE,
    SELECTED_NOTE_BOX: COLOR.DARK_BEIGE,
    BUTTON: COLOR.WHITE,
    INPUT: COLOR.LIGHT_BEIGE,
    TEXT: COLOR.BLACK,
    PLACEHOLDER: COLOR.LIGHT_BLACK
  }),
  
  "DARK": Object.freeze({
    BACKGROUND: COLOR.LIGHT_BLUE,
    MAIN_PANEL: COLOR.TRANSPARENT_BLACK,
    GROUP_PANEL: COLOR.DARK_BLUE,
    NOTE_BOX: COLOR.BLUE,
    NOTE_BOX_HEADER: COLOR.TRANSPARENT_BLACK,
    SELECTED_NOTE_BOX: COLOR.BLUE,
    BUTTON: COLOR.BLUE_2,
    INPUT: COLOR.BLUE_2,
    TEXT: COLOR.BEIGE_2,
    PLACEHOLDER: COLOR.GARY_BLUE,
  })
})
