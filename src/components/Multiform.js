import React, { useState } from 'react';
import { FaTrash, FaPlusCircle } from "react-icons/fa"

function FormComponent({ showInput, inputValue, onToggle, onInputChange, onDelete }) {
  return (
    <div>
      <button onClick={onToggle}>
        {showInput ? 'Verbergen' : 'Anzeigen'} Eingabefeld
      </button>
      {showInput && (
        <input
          type="text"
          value={inputValue}
          onChange={onInputChange}
        />
      )}
      <button onClick={onDelete}><FaTrash /></button>
    </div>
  );
}

function MultiForm() {
  const [forms, setForms] = useState([{ showInput: true, inputValue: '' }]);

  const addForm = () => {
    setForms([...forms, { showInput: true, inputValue: '' }]);
  };

  const toggleInput = (index) => {
    const updatedForms = [...forms];
    updatedForms[index].showInput = !updatedForms[index].showInput;
    setForms(updatedForms);
  };

  const handleInputChange = (index, e) => {
    const updatedForms = [...forms];
    updatedForms[index].inputValue = e.target.value;
    setForms(updatedForms);
  };

  const deleteForm = (index) => {
    const updatedForms = [...forms];
    updatedForms.splice(index, 1);
    setForms(updatedForms);
  };

  return (
    <div>
      <button onClick={addForm}><FaPlusCircle /></button>
      {forms.map((form, index) => (
        <FormComponent
          key={index}
          showInput={form.showInput}
          inputValue={form.inputValue}
          onToggle={() => toggleInput(index)}
          onInputChange={(e) => handleInputChange(index, e)}
          onDelete={() => deleteForm(index)}
        />
      ))}
    </div>
  );
}

export default MultiForm;
