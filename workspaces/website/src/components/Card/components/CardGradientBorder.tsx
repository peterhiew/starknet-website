import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";

interface BorderRadius {
  base: string;
  md?: string;
  lg?: string;
}
type Props = {
  children: React.ReactNode;
  padding?: string;
  borderRadius?: BorderRadius | string;
} & BoxProps;

export const CardGradientBorder = ({
  children,
  padding = "8px",
  borderRadius = "16px",
  ...rest
}: Props) => {
  return (
    <Box
      borderWidth="1px"
      borderColor="card-br"
      padding={padding}
      bg="card-bg"
      borderRadius={borderRadius}
      height="100%"
      _hover={{
        background:
          "linear-gradient(119deg, #EC796B -25.87%, #D672EF 125.87%), linear-gradient(0deg, #FBFBFB, #FBFBFB)",
        borderColor: "transparent",
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};
