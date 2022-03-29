import Button from "@mui/material/Button";
import * as React from "react";
import Box from "@mui/material/Box";

export default function SaveButton() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Button
        onClick={() => window.print()}
        id="submit-entry"
        variant="contained"
        color="primary"
      >
        Save Budget
      </Button>
    </Box>
  );
}
