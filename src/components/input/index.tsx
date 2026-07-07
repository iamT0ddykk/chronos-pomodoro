import type React from "react";
import styles from "./Style.module.css";

type InputProp = {
  id: string;
  labelText: string;
} & React.ComponentProps<"input">;

export function MeuInput({ id, type, labelText, ...rest }: InputProp) {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input
        className={styles.meuinput}
        id={id}
        type={type}
        {...rest}
      />
    </>
  );
}
