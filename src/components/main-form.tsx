import { Button, TextField } from "@mui/material";
import { useState, type ChangeEvent } from "react";

function MainForm() {
  const [choice, setChoice] = useState("");
  const [choiceArray, setChoiceArray] = useState([]);
  console.log(`Estado novo do array: ${choiceArray}`);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChoice(event.target.value);
  };

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Botão funcionou");
    console.log(`Valor de choice: ${choice}`);
    console.log(`Estado antigo do array: ${choiceArray}`);
    setChoiceArray([...choiceArray, choice]);
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        // value={choice}
        id="choice"
        margin="normal"
        label="Insira uma opção"
        variant="outlined"
        fullWidth
        onChange={handleChange}
      />

      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default MainForm;
