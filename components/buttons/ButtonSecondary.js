import styled from "@emotion/styled";
import { Button } from "@mui/material";

const ButtonSecondary = styled(Button)({
  height: "38px",
  padding: "10px 16px",
  fontWeight: 700,
  fontSize: { sm: "16px", xs: "10px" },
  textTransform: "none",
  color: "white",
  borderRadius: "50px",
  backgroundColor: "#C8102E",
  "&:hover": {
    backgroundColor: "#e01233",
    transform: "scale(1.1)",
  },
});

export default ButtonSecondary;
