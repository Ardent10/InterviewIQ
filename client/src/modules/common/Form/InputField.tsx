import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Styles } from "./index.styles";
import { InputHeading } from "./inputHeading";

interface Props {
  name: string;
  type: string;
  placeholder?: string;
  disable?: boolean;
  control?: any;
  required?: boolean;
  inputHeadingType?: string;
  inputHeadingLabel?: string;
  inputHeadingLabelFontWeight?: number;
  inputHeadingLabelFontSize?: number;
  inputHeadingLabelColor?: string;
  inputTextPaddingLeft?: string;
  inputHeadingGridSpace?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  inputFieldGridSpace?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  leftMarginToInputField?: string;
  onChange?: any;
  rest?: any;
  forgetPasswordLink?: boolean;
  maxDate?: Date | string;
  minDate?: Date | string;
  inputFieldPadding?: number;
  borderRadius?: number;
}

export const InputField = ({
  name,
  type,
  placeholder,
  disable,
  control,
  required,
  inputHeadingType,
  inputHeadingLabel,
  inputHeadingLabelFontWeight,
  inputHeadingLabelFontSize,
  inputHeadingLabelColor,
  inputHeadingGridSpace,
  inputFieldGridSpace,
  rest,
  forgetPasswordLink,
  maxDate,
  minDate,
  inputFieldPadding,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const styles = Styles({
    inputFieldPadding,
    inputHeadingGridSpace,
    inputFieldGridSpace,
  });

  return (
    <Controller
      name={name}
      // defaultValue={""}
      control={control}
      render={({
        field: { onChange, onBlur, value, ref },
        fieldState: { isTouched, error },
      }) => {
        return (
          <Grid templateColumns={"repeat(1, 1fr)"} gap={2} w={"full"}>
            <InputHeading
              label={inputHeadingLabel || ""}
              inputHeadingType={inputHeadingType}
              forgetPasswordLink={forgetPasswordLink}
              required={required}
              fontWeight={inputHeadingLabelFontWeight}
              fontSize={inputHeadingLabelFontSize}
              color={inputHeadingLabelColor}
            />

            <FormControl
              // isRequired={required}
              isInvalid={required && isTouched && !value}
            >
              <InputGroup>
                <Input
                  placeholder={placeholder}
                  sx={styles.inputFieldStyle}
                  type={
                    type === "password"
                      ? showPassword
                        ? "text"
                        : "password"
                      : type
                  }
                  disabled={disable}
                  value={value ? value : ""}
                  onBlur={onBlur}
                  onChange={onChange}
                  ref={ref}
                  max={maxDate ? maxDate : undefined}
                  min={minDate ? minDate : undefined}
                  onKeyDown={(e) => (type === "date" ? e.preventDefault() : {})}
                  {...rest}
                />
                {type === "password" && (
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      p={0}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                    </Button>
                  </InputRightElement>
                )}
              </InputGroup>
              <FormHelperText fontSize="12px" color="#FF0000">
                {error ? error.message : ""}
              </FormHelperText>
            </FormControl>
          </Grid>
        );
      }}
    />
  );
};
