import { useEffect, useState } from 'react';
import darkPng from '/dark-mode-button.png';
import lightPng from '/light-mode-button.png';

function Darkmode() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
      document.body.style.backgroundColor = "#1A1A1A"; // Definindo a cor do background do body para #1A1A1A
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      document.body.style.backgroundColor = "#ffffff"; // Definindo a cor do background do body para #ffffff
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const changeTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className='relative'>
      {theme === "dark" ? (
        <img
          src={lightPng}
          alt="Imagem de botão claro"
          onClick={changeTheme}
          className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"
        />
      ) : (
        <img
          src={darkPng}
          alt="Imagem de botão escuro"
          onClick={changeTheme}
          className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"
        />
      )}
    </div>
  );
}

export default Darkmode;
