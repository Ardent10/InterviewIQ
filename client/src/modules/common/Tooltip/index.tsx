import { Tooltip } from "@chakra-ui/react";

interface TooltipProps {
  placement: "top" | "right" | "bottom" | "left";
  label: string;
  color: string;
  children: React.ReactNode;
  id?: string ;
}

export const CutsomTooltip = ({
  placement,
  children,
  label,
  color,
  id,
}: TooltipProps) => {
  return (
    <Tooltip
      id={id}
      placement={placement}
      hasArrow
      label={label}
      bg="gray.900"
      px={2}
      rounded={"md"}
      color={color}
    >
      {children}
    </Tooltip>
  );
};
