import React from 'react';
import { Card, List, ListItem, ListItemText } from '@material-ui/core';

function ChoicesList() {
  const arrayTeste = ["teste 1", "teste 2", "teste 3", "teste 4", "teste 5"];
  return (
    <Card>
      <List component="nav" aria-label="main mailbox folders">
      </List>
      <List component="nav" aria-label="secondary mailbox folders">
      {arrayTeste.map((num) => (
        <ListItem button>
          <ListItemText primary={num} />
        </ListItem>
      ))}
      </List>



    </Card>
  )
}

export default ChoicesList;