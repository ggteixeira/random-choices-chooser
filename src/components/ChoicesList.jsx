import React from 'react';
import { Card, List, ListItem, ListItemText, Divider } from '@material-ui/core';

function ChoicesList() {
  return (
    <Card>
      <List component="nav" aria-label="main mailbox folders">
      </List>
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
      </List>
    </Card>
  )
}

export default ChoicesList;