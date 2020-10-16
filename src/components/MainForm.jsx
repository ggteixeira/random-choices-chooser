import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';


function MainForm() {
  const [choice, setChoice] = useState('');
  const [choiceArray, setChoiceArray] = useState([]);
  console.log(`Estado novo do array: ${choiceArray}`)

  const handleChange = (event) => {
    setChoice(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Botão funcionou")
    console.log(`Valor de choice: ${choice}`)
    console.log(`Estado antigo do array: ${choiceArray}`)
    setChoiceArray([...choiceArray, choice])
  }
  return (
    <form
      onSubmit={handleSubmit}
    >
      <TextField
        label="Insira uma opção"
        id="choice"
        variant="outlined"
        size="small"
        onChange={handleChange}
      />

      <Button
        variant="contained"
        color="primary"
        type="submit" 
      >
        Cadastrar
      </Button>
    </form>
  )
}

export default MainForm;