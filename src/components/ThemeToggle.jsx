const ThemeToggle = ({ theme, toggleTheme }) => (
  <button onClick={toggleTheme}>
    Cambiar a tema {theme === "light" ? "oscuro" : "claro"}
  </button>
);

export default ThemeToggle;
