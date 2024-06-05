import kaboom from "kaboom";

export const k = kaboom({
  global: false, //not global
  touchToMouse: true,
  canvas: document.getElementById("game"),
});
