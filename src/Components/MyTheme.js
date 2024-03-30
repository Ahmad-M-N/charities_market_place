import { createTheme } from '@mui/material/styles';

export const MyTheme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: 'rgb(238,238,264)',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#ffffff',
    },
    white:{
      main:'#ffffff'
    },
    blue:{
      main: 'rgb(64, 134, 214)'
    },
    whitesmoke:{
      main:'whitesmoke'
    },
  },
});