import { Stack, Button } from "@mui/material";

export const MuiButtons = () => {
  return (
    <div>
      <Stack spacing={2} direction='row'>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </div>
  );
};
