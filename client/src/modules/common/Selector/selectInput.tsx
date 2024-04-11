import {
  Box,
  Button,
  Grid,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { InputHeading } from "@modules/common/Form/inputHeading";
import { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Error } from "../Error";

interface SelectorProps {
  title?: string;
  fontSize?: number;
  color?: string;
  data: any;
  name: string;
  control: any;
  required?: boolean;
  fontWeight?: number;
  disable?: boolean;
  sendId?: boolean;
  placeHolder?: string;
  inputHeadingType?: string;
  defaultLabel?: string;
  setOption?: any;
  currentAnswerType?: string;
}

export function Selector({
  title,
  fontSize,
  data,
  name,
  control,
  required,
  fontWeight,
  disable,
  sendId,
  placeHolder,
  inputHeadingType,
  defaultLabel,
  setOption,
  currentAnswerType,
}: SelectorProps) {
  const [selectedItem, setSelectedItem] = useState<any>(null);
  
  useEffect(() => {
   if (currentAnswerType) {
     const selectedItem = data.find(
       (item: any) => item.label === currentAnswerType
     );
     setSelectedItem(selectedItem || null);
   } else {
     const defaultItem = data.find((item: any) => item.label === defaultLabel);
     setSelectedItem(defaultItem || null);
   }
  }, [currentAnswerType, defaultLabel, data]);
  

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, onBlur, value, ref },
        fieldState: { isTouched, error },
      }) => {
        return (
          <Grid p={0}>
            {title && (
              <Grid templateColumns={"repeat(1, 1fr)"} pb={2}>
                <InputHeading
                  inputHeadingType={inputHeadingType}
                  label={title}
                  required={required}
                  fontSize={fontSize}
                  fontWeight={fontWeight}
                />
              </Grid>
            )}

            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<MdOutlineArrowDropDown />}
                variant={"outline"}
                onBlur={onBlur}
                isDisabled={disable}
              >
                <Box p={0} alignItems="center" display={"flex"}>
                  {selectedItem &&
                    (typeof selectedItem.icon === "string" ? (
                      <Box as="img" src={selectedItem.icon} alt="icon" w={3} />
                    ) : (
                      selectedItem.icon
                    ))}
                  <Text pl={2}>{selectedItem?.label || placeHolder}</Text>
                </Box>
              </MenuButton>
              <MenuList p={0} m={0} maxH={"30vh"} overflowY={"scroll"}>
                {data.map((d: any) => (
                  <MenuItem
                    key={d.id ? d.id : d.label}
                    onClick={() => {
                      onChange(d.id || d.label);
                      onBlur();
                      setSelectedItem(d);
                      setOption(d.label);
                    }}
                  >
                    <Box display="flex" alignItems="center">
                      {typeof d.icon === "string" ? (
                        <Box as="img" src={d.icon} alt="icon" w={3} />
                      ) : (
                        d.icon
                      )}
                      <Text pl={2}>
                        {(d.showLabel && d.showLabel) || d.label}
                      </Text>
                    </Box>
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Error error={error} fontSize={12} />
          </Grid>
        );
      }}
    />
  );
}