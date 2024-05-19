"use client";
import React, { useState, useEffect } from "react";
import { mainState, IPage1, defaultPage1Props } from "../page";
import {
  Stack,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";

interface Page1Props {
  mainState: mainState;
  setMainState: (state: mainState) => void;
}

const Page1 = (props: Page1Props) => {
  const { mainState, setMainState } = props;
  const [page1state, setPage1state] = useState<IPage1>(defaultPage1Props);

  const genders = ["Male", "Female", "Other"];
  const pronouns = ["He/Him", "She/Her", "They/Them"];

  useEffect(() => {
    setMainState({ ...mainState, page1: page1state });
  }, [page1state]);

  return (
    <Stack spacing={2}>
      <TextField
        label="Name"
        value={page1state.name}
        onChange={(e) => setPage1state({ ...page1state, name: e.target.value })}
      />
      <FormControl fullWidth>
        <InputLabel id="gender-label">Age</InputLabel>
        <Select
          labelId="gender-label"
          label="Gender"
          value={page1state.gender}
          onChange={(e) =>
            setPage1state({ ...page1state, gender: e.target.value })
          }
        >
          {genders.map((gender) => {
            return (
              <MenuItem key={gender} value={gender.toLowerCase()}>
                {gender}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="pronoun-label">Pronoun</InputLabel>
        <Select
          labelId="pronoun-label"
          label="Pronoun"
          value={page1state.pronoun}
          onChange={(e) =>
            setPage1state({ ...page1state, pronoun: e.target.value })
          }
        >
          {pronouns.map((pronoun) => {
            return (
              <MenuItem key={pronoun} value={pronoun.toLowerCase()}>
                {pronoun}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <TextField
          variant="outlined"
          type="date"
          value={page1state.dob}
          onChange={(e) =>
            setPage1state({ ...page1state, dob: e.target.value })
          }
        />
      </FormControl>
    </Stack>
  );
};

export default Page1;
