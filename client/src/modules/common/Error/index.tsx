import { Text } from "@chakra-ui/react";
import { sxStyles } from "./index.styles";

interface props {
  error?: any;
  fontSize?: number;
}

export function Error({ error, fontSize }: props) {
  const styleProps = { fontSize: fontSize };
  const styles = sxStyles(styleProps);

  return (
    error && <Text sx={styles.errorStyle}>{error.message}</Text>
  );
}
