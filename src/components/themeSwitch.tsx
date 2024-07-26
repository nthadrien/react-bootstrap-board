import { useState } from "react";
import DarkIcon from "../assets/icons/dark.svg?react";
import LigIcon from "../assets/icons/light.svg?react";

  
export default function ThemeSwitcher() {
    const [theme, setTheme] = useState('light');
  
    function handleTheme() {
      if (theme === 'light') {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
        setTheme('dark');
      } else {
        document.documentElement.setAttribute('data-bs-theme', 'light');
        setTheme('light');
      }
    }
  
    return (
      <>
      <button className='btn rounded p-1' onClick={() => handleTheme()}>
        {theme === 'light' ? <LigIcon width={32} />: <DarkIcon width={38} />}
        </button>
      </>
    );
  }