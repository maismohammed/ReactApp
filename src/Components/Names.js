import React from 'react';

const names = ['Rusul', 'Ula', 'Sara', 'Yasamin'];

const Names = () => {
  const handleButtonClick = (name) => {
    alert(`${name} is here.`);
  };

  return (
    <div>
      <h1>Students List</h1>
      <ul>
        {names.map((name, index) => (
          <li key={index}>
            {name}
            <button onClick={() => handleButtonClick(name)}>Call {name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Names;