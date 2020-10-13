import React from 'react';
import MainForm from './components/MainForm';
import './App.css';

import { Container, Typography } from '@material-ui/core';
import 'fontsource-roboto';
import ChoicesList from './components/ChoicesList';

function App() {
  return (
    <Container
      component="article"
      maxWidth="sm"
    >
      <Typography
        variant="h3"
        component="h1"
        align="center"
      >
        Random Chooser
      </Typography>

      <MainForm />

      <ChoicesList/>

    </Container>
  );
} 

export default App;
