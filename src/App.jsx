import "./App.css";
import React from "react";
import Expense from "./components/Expense";
import SaveButton from "./components/SaveButton";
import Typography from "@mui/material/Typography";
import TotalPay from "./components/TotalPay";
import { Box, Button, Container, Stack } from "@mui/material";

const totalAdd = (e) => {
  // Grab all inputs that are named 'expense'
  let inputs = document.querySelectorAll('[name="expense"]');

  // Trying to loop through the values and get the sum of all inputs
  let totalVal = 0;
  for (var i = 0; i < inputs.length; i++) {
    totalVal +=
      (isNaN(parseInt(totalVal)) ? 0 : parseInt(totalVal)) +
      (isNaN(parseInt(inputs[i].value)) ? 0 : parseInt(inputs[i].value));
  }
  // Grabs the value entered in the totalPay component and calculates that value minus the total value of all inputs
  const totalPayInput = document.getElementById("total-pay").value;
  const totalRemaining = totalPayInput - totalVal;

  // Trying to grab total values of all expense amount fields and put in the total amount label
  document.getElementById("total-amount").innerHTML =
    "Total pay remaining: $" + totalRemaining;
};

function App() {
  return (
    <Box
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="App">
        <Container>
          <React.Fragment>
            <Stack spacing={2}>
              <Typography variant="h5" component="div" gutterBottom>
                Budgy App
              </Typography>
              <TotalPay
                id="total-pay"
                label={"Total Pay: "}
                name={"totalpay"}
              />
              <Expense />
              <Stack direction="row" spacing={2}>
                <SaveButton />
                <Button onClick={totalAdd}>Add Values</Button>
              </Stack>
              <label id="total-amount">Total pay remaining: $0</label>
            </Stack>
          </React.Fragment>
        </Container>
      </div>
    </Box>
  );
}

export default App;
