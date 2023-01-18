import { Content } from "./Content.js"
import { Box } from "./Box.js";
import Apps from "../../pages/apps"

export const Layout = ({ children }) => (
  <Box 
    css={{
      padding: 25,
      maxW: "100%"
    }}
  >
    {children}
    <Apps/>
  </Box>
);
