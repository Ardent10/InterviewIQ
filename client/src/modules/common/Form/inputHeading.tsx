import { Flex, Grid, Link, Text, useColorMode } from "@chakra-ui/react";
interface Props {
  label: string;
  required?: boolean;
  forgetPasswordLink?: boolean;
  fontWeight?: number;
  fontSize?: string | number;
  color?: string;
  inputHeadingType?: string;
  inputHeadingLabel?: string;
  inputHeadingLabelFontWeight?: number;
  inputHeadingLabelFontSize?: number;
  inputHeadingLabelColor?: string;
}

export const InputHeading = ({
  label,
  required,
  forgetPasswordLink,
  fontWeight,
  fontSize,
  color,
  inputHeadingType,
  inputHeadingLabel,
  inputHeadingLabelFontWeight,
  inputHeadingLabelFontSize,
  inputHeadingLabelColor,
}: Props) => {
  const { colorMode } = useColorMode();

  return (
    <Flex fontSize={fontSize} color={color} alignItems="center">
      {inputHeadingType && (
        <Grid>
          {inputHeadingType === "Bold" && (
            <Text
              as="h2"
              fontWeight={
                inputHeadingLabelFontWeight ? inputHeadingLabelFontWeight : 600
              }
              fontSize={
                inputHeadingLabelFontSize ? inputHeadingLabelFontSize : 16
              }
              color={
                inputHeadingLabelColor
                  ? inputHeadingLabelColor
                  : colorMode === "light"
                  ? "#000"
                  : "#fff"
              }
            >
              {label}
            </Text>
          )}

          {inputHeadingType === "Normal" && (
            <Text
              as="h3"
              fontWeight={
                inputHeadingLabelFontWeight ? inputHeadingLabelFontWeight : 400
              }
              fontSize={
                inputHeadingLabelFontSize ? inputHeadingLabelFontSize : 12
              }
              color={
                inputHeadingLabelColor ? inputHeadingLabelColor : "#4b4b4b"
              }
            >
              {label}
            </Text>
          )}
        </Grid>
      )}
      {required && (
        <Text as="span" color="red.500" ml={1}>
          *
        </Text>
      )}
      {forgetPasswordLink && (
        <Link
          href={"/forgot-password"}
          fontSize={fontSize}
          fontWeight={fontWeight}
          color={color}
          ml={1}
        >
          Forgot Password?
        </Link>
      )}
    </Flex>
  );
};
