import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";

export default function Expense() {
  const [valuesList, setValueList] = useState([
    {
      expense: "",
    },
  ]);

  const handleValuesAdd = () => {
    setValueList([
      ...valuesList,
      {
        expense: "",
      },
    ]);
  };

  const handleValuesRemove = (index) => {
    const list = [...valuesList];
    list.splice(index, 1);
    setValueList(list);
  };

  const handleValuesChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...valuesList];
    list[index][name] = value;
    setValueList(list);
  };

  return (
    <FormControl sx={{ width: "75ch" }}>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: 575 },
        }}
        noValidate
        autoComplete="off"
      >
        {valuesList.map((singleExpense, index) => (
          <div key={index} className="expenses">
            <Stack spacing={2} direction="row">
              <TextField variant="outlined" label="Expense" />
              <TextField
                name="expense"
                type="number"
                variant="outlined"
                label="Amount"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
                value={singleExpense.expense}
                onChange={(e) => handleValuesChange(e, index)}
              />
              {valuesList.length > 1 && (
                <IconButton
                  aria-label="delete"
                  onClick={() => handleValuesRemove(index)}
                >
                  <DeleteIcon />{" "}
                </IconButton>
              )}
              {valuesList.length - 1 === index && (
                <IconButton
                  aria-label="add"
                  color="primary"
                  onClick={handleValuesAdd}
                >
                  <AddIcon />
                </IconButton>
              )}
            </Stack>
          </div>
        ))}
      </Box>
    </FormControl>
  );
}
