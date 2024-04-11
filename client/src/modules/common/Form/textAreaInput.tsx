import { FormErrorMessage, Textarea } from "@chakra-ui/react";
import { Controller } from "react-hook-form";

interface Props {
  name: string;
  disable?: boolean;
  required?: boolean;
  control: any;
  placeholder: string;
  minRows?: number;
  size: "md" | "lg" | "xl";
  rest?: any;
  onBlur?:any;
  defaultValue?: string;
}

export function TextAreaInput({
  name,
  disable,
  control,
  required,
  minRows,
  placeholder,
  size,
  rest,
  onBlur,
  defaultValue,
}: Props) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState, formState }) => {
        return (
          <>
            <Textarea
              {...field}
              onBlur={onBlur}
              value={field.value || ""}
              minH={minRows ? `${minRows * 2}rem` : "5rem"}
              isDisabled={disable}
              required={required}
              placeholder={placeholder}
              size={size}
              resize="vertical"
              {...rest}
              _focusVisible={{
                boxShadow: "0 0 0 1px #bfadff",
                borderColor: "#bfadff",
              }}
            />
            <FormErrorMessage>
              {fieldState.error && fieldState.error.message}
            </FormErrorMessage>
          </>
        );
      }}
    />
  );
}
