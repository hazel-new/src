import React, { useState } from 'react';

const TableInput = () => {
  const [tableHTML, setTableHTML] = useState('');

  const handleInputChange = (event) => {
    setTableHTML(event.target.innerHTML);
  };

  return (
    <div>
      <h1>Table Input</h1>
      <div
        contentEditable
        style={{ border: '1px solid #ccc', padding: '10px' }}
        onInput={handleInputChange}
      />
      <h2>Preview:</h2>
      <div dangerouslySetInnerHTML={{ __html: tableHTML }} />
    </div>
  );
};

export default TableInput;