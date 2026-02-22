import { Card, List, ListItem, ListItemText } from "@mui/material";

function ChoicesList() {
  return (
    <Card>
      <List component="nav" aria-label="main mailbox folders"></List>
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem>
          <ListItemText primary="Trash" />
        </ListItem>
      </List>
    </Card>
  );
}

export default ChoicesList;
