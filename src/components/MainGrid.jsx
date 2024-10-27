import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
//import { display } from '@mui/system';


const Item = styled(Paper)(({ theme }) => ({

  padding: theme.spacing(9),
  backgroundColor: '#fff',
  textAlign: 'left',

}));

const dev = '</dev>';
export  function MainGrid() {
  return (
 

<Paper sx={{ p: 2, width: '100%' }}>
<CssBaseline />

      <Container
       maxWidth="xl" >
        <Box  sx={{ 
          minHeight: 'calc(100vh + 110px )',
          display: 'flex',
          flexWrap: 'wrap',
          mr: 1, 
          backgroundImage: `url('/src/assets/Background.jpg')`,
          backgroundSize: 'cover',
          margin: '0',
          maxWidth : 'xxl',
          backgroundPosition: 'center',  
           }} >

<Box
        sx={{
          display: 'flex',
          flexDirection: 'row-reverse',
          p: 10,
          m: 10,
          bgcolor: 'background.paper',
          borderRadius: 1,
          flexWrap: 'wrap'
        }}
      >
        
        <Typography variant="h3" size={{ xs: 6, md: 12}}> Full  </Typography>
        <Typography variant="h3" size={{ xs: 6, md: 12}}> {dev} </Typography>

        </Box>
            
             
            
             
              <Typography variant="h1" size={{ xs: 6, md: 12}}> Miroslava Guzman  </Typography>
            
             <Typography variant="h3" size={{ xs: 6, md: 12}}> Stack </Typography>
              
            
       


        </Box>
        <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(270deg, #ff7e5f, #feb47b, #86a8e7, #7f7fd5)',
        backgroundSize: '600% 600%',
        animation: 'gradientAnimation 10s ease infinite'
      }}
    >
      <Typography variant="h2" color="white">
        Fondo de Gradiente en Movimiento
      </Typography>
    </Box>



      </Container>
</Paper>
  )

 
}