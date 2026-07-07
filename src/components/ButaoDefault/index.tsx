import type React from "react";
import styles from "./Style.module.css";

type ButaoDefaultProp = {
  icon: React.ReactNode;
  color: "red" | "green";
} & React.ComponentProps<"button">;

export function MeuButaoDefault({
  icon,
  color = "green",
  ...rest
}: ButaoDefaultProp) {
  return (
    <>
      <button
        className={`${styles.meubutaodefault} ${styles[color]}`}
        {...rest}
      >
        {icon}
      </button>
    </>
  );
}
