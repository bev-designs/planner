import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from './Utilities';

export function ThoughtForm(props) {

  const [textInput, setTextInput] = useState('');

  const handleTextChange = (e) => {
    setTextInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
     
     const thought = {
      id: generateId(),
      text: textInput,
      expiresAt: getNewExpirationTime(),
 }
     textInput.length > 0 && props.addThought(thought) 
     setTextInput('');
  }
  return (
    <form className="ThoughtForm" onSubmit={handleSubmit}>
      <input
        type="text"
        aria-label="What's your task?"
        placeholder="What's your task?"
        value={textInput}
        onChange={handleTextChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
}
