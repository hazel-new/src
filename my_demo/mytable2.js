import React from 'react';
import Table from './Table';

const App = () => {
  const data = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 25 },
    { id: 3, name: 'Bob Johnson', age: 40 },
    { id: 4, name: 'Bob Johnson', age: 40 },
    { id: 5, name: 'Bob Johnson', age: 40 }
  ];

  return (
    <div>
      <h1>Table Example</h1>
      <Table data={data} />
    </div>
  );
};

export default App;