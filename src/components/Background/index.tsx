import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../global/styles/theme";
import { styles } from "./style";

type Props = {
  children: ReactNode;
}

export function Background({ children }: Props) {
  const { primary, secondary } = theme.colors;
  return (
    <LinearGradient
      style={styles.container}
      colors={[primary, primary]}
    >
      {children}
    </LinearGradient>
  )
}