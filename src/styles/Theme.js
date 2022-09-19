export const LightTheme = (color = "#f51720") => {
  return {
    name: "light",
    backgroundColor: "#ccc",
    primaryColor: `${color}`,
    textColor: "rgb(0, 0, 0)",
  };
};

export const DarkTheme = (color = "#f51720") => {
  return {
    name: "dark",
    backgroundColor: "#222426",
    primaryColor: `${color}`,
    textColor: "rgb(255, 255, 255)",
  };
};
