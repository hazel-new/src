import React from 'react';
import Table from './Table';

const App = () => {
  const data = [
    { id: 1, name: 'John Doe', age: 30 , linkid:995},
    { id: 2, name: 'Jane Smith', age: 25, linkid:996 },
    { id: 3, name: 'Bob Johnson', age: 40, linkid:997 },
    { id: 4, name: 'Bob Johnson', age: 40 , linkid:998},
    { id: 5, name: 'Bob Johnson', age: 40, linkid:999 }
  ];

  return (
    <div>
      <h1>Table Example</h1>
      <Table data={data} />
    </div>
  );
};

export default App;