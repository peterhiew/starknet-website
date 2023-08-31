import { Box, Stack, Divider, BoxProps } from "@chakra-ui/react";
import { Text } from "@ui/Typography/Text";
import { Heading } from "@ui/Typography/Heading";

import React from "react";

type Props = {
  title: string | undefined;
  description?: string | undefined;
  bottomContent?: React.ReactNode;
  size?: "sm" | "lg";
  border?: boolean;
  pageLastUpdated?: string | null;
} & BoxProps;

export const SectionHeader = ({
  size = "sm",
  title,
  border,
  description,
  bottomContent,
  pageLastUpdated,
  ...rest
}: Props) => {
  return (
    <Box
      as="section"
      {...(border && { sx: {
        borderBottom: "1px solid",
        borderColor: "border.divider"
      }
      })}
      maxW="864px"
      pb={{
        base: "page.block-gap.base",
        md: "page.block-gap.md",
        lg: "2xl",
      }}
      mb="40px"
      {...rest}
      // pt={{ base: "4", md: "8" }} pb={{ base: "12", md: "12" }}
    >
      <Stack spacing="40px" {...(border && { borderBottom: "1px solid", borderColor: "border.divider"})}>
        <Box>
          <Heading
            variant="h1"
            as="h2"
            // fontSize={{ base: "32px", md: "48px" }}
            // lineHeight={{ base: "1.5em", md: "1.5em" }}
            fontWeight="extrabold"
            color="heading-navy-fg"
          >
            {title}
          </Heading>
          {description && (
            <Text
              color="content.accent.value"
              variant="body"
              pt={size === "sm" ? "xs" : "lg"}
            >
              {description}
            </Text>
          )}
          {bottomContent}
        </Box>
      </Stack>
    </Box>
  );
};
