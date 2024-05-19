import React, { useEffect, useState } from "react";
import { defaultPage2Props, IPage2, mainState } from "../page";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";

import countries from "../data/country.json";
import timezones from "../data/timezone.json";
import colleges from "../data/college.json";

interface Page2Props {
  mainState: mainState;
  setMainState: (state: mainState) => void;
}

const Page2 = (props: Page2Props) => {
  const { mainState, setMainState } = props;
  const [page2state, setPage2state] = useState<IPage2>(defaultPage2Props);

  useEffect(() => {
    setMainState({ ...mainState, page2: page2state });
  }, [page2state]);

  return (
    <Stack spacing={2}>
      <FormControl fullWidth>
        <InputLabel id="country-label">Country</InputLabel>
        <Select
          labelId="country-label"
          label="Country"
          value={page2state.country}
          onChange={(e) =>
            setPage2state({ ...page2state, country: e.target.value })
          }
        >
          {countries.map((country) => {
            return (
              <MenuItem key={country.code} value={country.code}>
                {country.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="timezone-label">Timezone</InputLabel>
        <Select
          labelId="timezone-label"
          label="Timezone"
          value={page2state.timezone}
          onChange={(e) =>
            setPage2state({ ...page2state, timezone: e.target.value })
          }
        >
          {timezones
            .find((country) => country.code === page2state.country)
            ?.timezones.map((timezone) => {
              return (
                <MenuItem key={timezone.zone} value={timezone.zone}>
                  {timezone.name}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="college-label">College</InputLabel>
        <Select
          labelId="college-label"
          label="College"
          value={page2state.college}
          onChange={(e) =>
            setPage2state({ ...page2state, college: e.target.value })
          }
        >
          {colleges
            .find((country) => country.code === page2state.country)
            ?.colleges.map((college) => {
              return (
                <MenuItem key={college.name} value={college.name}>
                  {college.name}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
      <TextField
        label="Course"
        value={page2state.course}
        onChange={(e) =>
          setPage2state({ ...page2state, course: e.target.value })
        }
      />
      <TextField
        label="Passout Year"
        value={page2state.passoutYear}
        onChange={(e) =>
          setPage2state({ ...page2state, passoutYear: e.target.value })
        }
      />
      <TextField
        label="Specialization"
        value={page2state.specialization}
        onChange={(e) =>
          setPage2state({ ...page2state, specialization: e.target.value })
        }
      />
      <TextField
        label="Minor"
        value={page2state.minor}
        onChange={(e) =>
          setPage2state({ ...page2state, minor: e.target.value })
        }
      />
    </Stack>
  );
};

export default Page2;
