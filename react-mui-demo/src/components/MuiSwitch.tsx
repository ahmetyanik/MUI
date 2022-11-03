import { useState } from "react";
import { Box, FormControlLabel, Switch, FormGroup } from "@mui/material";

export const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);

  const [skills, setSkills] = useState<string[]>([]);

  console.log({ checked });
  console.log({ skills });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value);
    if (index === -1) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
  };

  return (
    <Box>
      <FormControlLabel
        label="Dark Mode"
        control={<Switch checked={checked} onChange={handleChange} />}
      />

      <Box>
        <FormGroup row>
          <FormControlLabel
            label="HTML"
            control={
              <Switch
                value="html"
                onChange={handleSkillChange}
                size="small"
                color="secondary"
              />
            }
          />
          <FormControlLabel
            label="CSS"
            control={<Switch value="css" onChange={handleSkillChange} />}
          />
          <FormControlLabel
            label="JavaScript"
            control={<Switch value="javascript" onChange={handleSkillChange} />}
          />
        </FormGroup>
      </Box>
    </Box>
  );
};
