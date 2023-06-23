import { Content } from "./Content"
import { Box } from "./Box";
import { FC, ReactNode } from "react";

interface LayoutProps {
    children:ReactNode
}

export const Layout:FC<LayoutProps> = ({ children  }) => (
  <Box
    css={{
      maxW: "100%"
    }}
  >
    {children}
    <Content />
  </Box>
);