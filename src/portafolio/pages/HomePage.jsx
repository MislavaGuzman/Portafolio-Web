
import { Grid2, Paper ,  AppBar  } from "@mui/material";
import Box from '@mui/material/Box';

import * as React from 'react';
import { ResponsiveAppBar, MainGrid } from "../../components";


export const HomePage = () => {
return (


<div>
<AppBar position="fixed" color="transparent">
<ResponsiveAppBar/>
</AppBar>

<Box sx={{ flexGrow: 1 }}>
<Grid2 mt={7} >
<MainGrid />
</Grid2>
</Box>

</div>


)
}