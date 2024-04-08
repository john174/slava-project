import React from 'react';
import AppRouter from './Router';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';



const darkBrownTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#5D4037', // Пример коричневого цвета, измените на нужный оттенок
    },
    background: {
      default: '#3E2723', // Фоновый цвет, измените на нужный оттенок
    },
    // Дополнительно, вы можете настроить другие цвета, как вам нужно
  },
});


function App() {
  return (
    <ThemeProvider theme={darkBrownTheme}>
      <CssBaseline /> 
      <div>
        <AppRouter />
      </div>
    </ThemeProvider>
  );
}

export default App;
