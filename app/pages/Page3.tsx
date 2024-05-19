import React, { useState, useEffect } from "react";
import { defaultPage3Props, IPage3, mainState } from "../page";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";

/*
export interface IPage3 {
  whatsapp: string; // input
  linkedin: string; // input
  twitter: string; // input
  mail: string; // input
  phone: string; // input + country code
}
*/

interface Page3Props {
  mainState: mainState;
  setMainState: (state: mainState) => void;
}

const Page3 = (props: Page3Props) => {
  const { mainState, setMainState } = props;
  const [Page3state, setPage3state] = useState<IPage3>(defaultPage3Props);

  useEffect(() => {
    setMainState({ ...mainState, page3: Page3state });
  }, [Page3state]);

  return (
    <Stack spacing={2}>
      <TextField
        label="Whatsapp"
        value={Page3state.whatsapp}
        onChange={(e) =>
          setPage3state({ ...Page3state, whatsapp: e.target.value })
        }
      />
      <TextField
        label="Linkedin"
        value={Page3state.linkedin}
        onChange={(e) =>
          setPage3state({ ...Page3state, linkedin: e.target.value })
        }
      />
      <TextField
        label="Twitter"
        value={Page3state.twitter}
        onChange={(e) =>
          setPage3state({ ...Page3state, twitter: e.target.value })
        }
      />
      <TextField
        label="Mail"
        value={Page3state.mail}
        onChange={(e) => setPage3state({ ...Page3state, mail: e.target.value })}
      />
      <Stack spacing={2}>
        <TextField
          label="Phone"
          value={Page3state.phone}
          onChange={(e) =>
            setPage3state({ ...Page3state, phone: e.target.value })
          }
        />
      </Stack>
    </Stack>
  );
};

export default Page3;
