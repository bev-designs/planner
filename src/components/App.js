import React, { useState } from 'react';
import { ThoughtForm } from './ThoughtForm';
import { Thought } from './Thought';
import { Form } from './Form.css';

function App() {
  const [thoughts, setThoughts] = useState([]);

const addThought = (thought) => {
  setThoughts((prev) => [thought, ...prev]);
}

const removeThought = (thoughtIdToRemove) => {
  setThoughts((thoughts) =>
    thoughts.filter((thought) => thought.id !== thoughtIdToRemove)
  );
}

  return (
    <div className="App">
      <header style={{ padding: '6rem 0 0 0'}}>
        <h1>Task Planner</h1>
      </header>
      <main>
        <ThoughtForm addThought={addThought}/>
        <ul className="thoughts">
          {thoughts.map((thought) => (
          <Thought key={thought.id} thought={thought} removeThought={removeThought}/>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;