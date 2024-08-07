import { Button } from "@mui/material";
import React from "react";

const CustomButton = ({ color, title }) => {
  return (
    <Button
      variant="contained"
      color={color ? color : "primary"}
      sx={{ textTransform: "none" }}
    >
      {title}
    </Button>
  );
};

export default CustomButton;
