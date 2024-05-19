import React from "react";
import { mainState } from "../page";
import { Stack, Typography } from "@mui/material";

interface Page4Props {
  mainState: mainState;
  setMainState: (state: mainState) => void;
}
const Page4 = (props: Page4Props) => {
  const { mainState } = props;
  return (
    <Stack spacing={2}>
      <Typography>Thank you for filling out the form!</Typography>
      <Typography>Here is the data you have entered:</Typography>
      <Typography>{JSON.stringify(mainState)}</Typography>
    </Stack>
  );
};

export default Page4;
