import { Box, Container, Typography } from "@mui/material";
import "./App.css";
import ChoicesList from "./components/choices-list";
import MainForm from "./components/main-form";

function App() {
  return (
    <Container>
      <Typography>Random</Typography>

      <Box>
        <MainForm />
      </Box>
      <Box>
        <ChoicesList />
      </Box>
    </Container>
  );
}

export default App;
