import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import {ThemeProvider } from '@mui/material/styles';
import {MyTheme} from './MyTheme'
import { TextField } from '@mui/material';



function ResponsiveAppBar() {
  const [charityName, setCharityName]= React.useState('')

  return (
    <ThemeProvider theme={MyTheme}>
    <AppBar position="static" sx={{boxShadow:1}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'arial',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              width:'20%'
            }}
          >
            Poash
          </Typography>
          <Box sx={{width:'60%', alignItems:'center'}} >
            <TextField 
              name='search charity name' label="search charity name" 
              value={charityName} onChange={e=> setCharityName(e.target.value)}
              sx={{alignItems:'center'}} color="neutral"
              size='small'
            />
            <Button sx={{ml:0.6, mt:0.2}} color='neutral' variant='outlined' size='medium' 
              href={"http://localhost:3000/charity/"+charityName}>Look Up
            </Button>  
          </Box>
          <Box sx={{width:'20%'}} >
          <Button sx={{ml:0.5, mt:0.2, boxShadow:0.1}} color='white' variant='filled'
              href="http://localhost:3000/charities/">All Charities
          </Button>  
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;