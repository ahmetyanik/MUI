import { Stack, TextField, InputAdornment } from "@mui/material";
import { useState } from "react";

export const MuiTextField = () => {
  const [value, setValue] = useState("");

  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Small Secondary" variant="outlined" size="small" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Form Input"
          variant="outlined"
          size="small"
          required
        />
        <TextField
          label="Form Input"
          variant="outlined"
          size="small"
          helperText="Do not share your password with anyone"
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          size="small"
          helperText="Do not share your password with anyone"
        />
        <TextField
          label="Password"
          type="password"
          disabled
          variant="outlined"
          size="small"
          helperText="Do not share your password with anyone"
        />
        <TextField label="Read only" InputProps={{ readOnly: true }} />
        <TextField
          label="Read only and error"
          InputProps={{ readOnly: true }}
          error={!value}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          helperText={!value ? 'Required' : 'Do not share your password with anyone!'}
        />
        <TextField
          label="Required"
          error={!value}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          helperText={!value ? 'Required' : 'Do not share your password with anyone!'}
        />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};
