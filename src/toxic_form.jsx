import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function ToxicForm(props) {
    const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    props.set_toxic_color(event.target.value);
  };

    return(
        <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">toxic1</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={[2,255,100]}>刺毒,咬毒</MenuItem>
          <MenuItem value={[2,255,100]}>粘液毒</MenuItem>
          <MenuItem value={[2,255,0]}>食中毒</MenuItem>
        </Select>
      </FormControl>
    </Box>
    )
  }

  