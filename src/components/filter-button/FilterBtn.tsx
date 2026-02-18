import { ComponentProps } from "react";
import styles from "./FilterBtn.module.css";
import clsx from "clsx";

type Props = ComponentProps<"button"> & {
    isActive?:boolean
};

export default function FilterBtn({
  className,
  children,
  isActive=false,
  ...otherProps
}: Props) {
  return (
    <button className={clsx(styles.filterBtn, className ,isActive && styles.isActive)} {...otherProps}>
      {children}
    </button>
  );
}
