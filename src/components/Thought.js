import React, { useEffect } from 'react';

export function Thought(props) {
  const { thought, removeThought } = props;

   useEffect(() => {
    const timeRemaining = thought.expiresAt - Date.now();
    const timeOut = setTimeout(() => {
       removeThought(thought.id);
    }, timeRemaining)
    return () => {
      clearTimeout(timeOut)
    };
  }, [thought]);

  const handleRemoveClick = () => {
    removeThought(thought.id);
  };
   
  return (
      <div>
        <li className="Thought">

        <div className="text">{thought.text}</div>
        <div className="FinishTask">
        <button
            aria-label="Remove thought"
            className="complete-button"
            onClick={handleRemoveClick}
          >
          &#10003;
          </button>
          <button
            aria-label="Remove thought"
            className="remove-button"
            onClick={handleRemoveClick}
          >
          &times;
          </button>
        </div>
        </li>
    </div>
  );
}
