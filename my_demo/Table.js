import React from 'react';


const Table = ({ data }) => {

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td><a href= {'http://wwww.baidu.com/'+ `${item.linkid}` }  >{item.name}</a></td>
            <td>{item.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;