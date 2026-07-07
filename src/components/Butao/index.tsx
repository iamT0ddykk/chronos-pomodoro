import styles from "./Styles.module.css";
import { HouseIcon, MoonIcon } from "lucide-react";
import { SettingsIcon } from "lucide-react";
import { SunIcon } from "lucide-react";
import { TimerIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { RouterLink } from "../RouterLink";

type avaibleThemes = "dark" | "light";

export function Butao() {
  const [theme, setTheme] = useState<avaibleThemes>(() => {
    const storageTheme =
      (localStorage.getItem("theme") as avaibleThemes) || "dark";
    return storageTheme;
  });

  function clica(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();

    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });
  }
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  function mudaIcon() {
    if (theme === "dark") {
      return <SunIcon></SunIcon>;
    } else {
      return <MoonIcon></MoonIcon>;
    }
  }
  return (
    <>
      <nav>
        <RouterLink className={styles.butao} title="Ir pra home" href="/">
          <HouseIcon></HouseIcon>
        </RouterLink>
        <RouterLink className={styles.butao} title="Ir pro historico" href="/history" >
          <TimerIcon></TimerIcon>
        </RouterLink>
        <RouterLink
          className={styles.butao}
          title="Ir pras configuracao"
          href="/settings"
        >
          <SettingsIcon></SettingsIcon>
        </RouterLink>
        <a className={styles.butao} title="Mudar tema" href="#" onClick={clica}>
          {mudaIcon()}
        </a>
      </nav>
    </>
  );
}
