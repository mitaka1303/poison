import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function ToxicForm(props) {
  const colorData=[{color:  [22,255,10] , name:'ペプチド'},
  {color: [200,25,10] , name:'プロアテーゼ'},
  {color:[2,255,0],name: 'ホスホリパーゼ'},
  {color:[200,2,100], name:'テトロドトキシン'},
  {color:[2,255,100], name:'アミノ酸'},
  {color:[200,255,0 ] , name:'バトラコトキシン'},
  {color:[2,2,100], name:'ムスカリン'} ]
    const [toxic, setToxic] = React.useState('');
    const handleChange = (event) => {
    setToxic(event.target.value)
    var found
    colorData.map((element) => {
      const _name = element.name
      if(toxic  == _name){
        found = element
      }
    });
    console.log(found)
    // props.set_toxic_color(event.target.value);
    props.set_toxic_color(found.color);
  };

    return(
        <Box sx={{ minWidth: 120 , m:1}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">toxic1</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={toxic}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={'ペプチド'}>ペプチド</MenuItem>
          <MenuItem value={'プロアテーゼ'}>プロアテーゼ</MenuItem>
          <MenuItem value={'ホスホリパーゼ'}>ホスホリパーゼ</MenuItem>
          <MenuItem value={'テトロドトキシン'}>テトロドトキシン</MenuItem>
          <MenuItem value={'アミノ酸'}>アミノ酸</MenuItem>
          <MenuItem value={'バトラコトキシン'}>バトラコトキシン</MenuItem>
          <MenuItem value={'イボテン酸'}>イボテン酸</MenuItem>
          <MenuItem value={'ムスカリン'}>ムスカリン</MenuItem>
        </Select>
      </FormControl>
    </Box>
    )
  }
