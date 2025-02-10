import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function ToxicForm(props) {
    const [age, setAge] = React.useState('');
    var toxic = props.toxic
  const handleChange = (event) => {
    props.set_toxic_color(event.target.value.color);
    props.set_toxic(event.target.label.name)
  };

    return(
        <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">toxic1</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.toxic}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={ {color:[22,255,10], name:"ペプチド"}}>ペプチド</MenuItem>
          <MenuItem value={ {color:[200,25,10], name:"プロアテーゼ"}}>プロアテーゼ</MenuItem>
          <MenuItem value={ {color:[2,255,0], name:"ホスホリパーゼ"}}>ホスホリパーゼ</MenuItem>
          <MenuItem value={ {color:[200,2,100], name:"テトロドトキシン"}}>テトロドトキシン</MenuItem>
          <MenuItem value={{color:[2,255,100], name:"アミノ酸"}}>アミノ酸</MenuItem>
          <MenuItem value={{color:[200,255,0],name: "バトラコトキシン"}}>バトラコトキシン</MenuItem>
          <MenuItem value={{color:[2,255,10],name:"イボテン酸"}}>イボテン酸</MenuItem>
          <MenuItem value={{color:[2,2,100], name:"ムスカリン"}}>ムスカリン</MenuItem>
        </Select>
      </FormControl>
    </Box>
    )
  }

  