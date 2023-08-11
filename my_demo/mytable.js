// 用react生成一个table，table行数根据内容自动改变
// 要在React中生成一个自动改变行数的表格，你可以使用动态数据绑定和条件渲染的方法。以下是一个示例代码，演示如何在React中实现这个功能
// 在这个示例中，我们使用了React的useState hook来保存表格的数据。data是一个数组，每个元素代表表格的一行。我们可以通过按钮点击来添加新行，并且可以对每行的数据进行编辑。当用户改变输入框的值时，handleInputChange函数会更新相应行的数据。通过调用map函数，我们可以根据data数组自动生成相应数量的表格行。每一行都有一个删除按钮，点击该按钮会调用handleDeleteRow函数删除相应的行。

// 请注意，上面的代码仅作为演示用途，并没有添加输入验证或完整的错误处理。在实际应用中，你可能需要添加验证逻辑和其他功能来增强用户体验和数据的完整性。

import React, { useState } from 'react';

const DynamicTable = () => {
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 25 },
    { id: 3, name: 'Bob Johnson', age: 40 },
    { id: 4, name: 'Bob Johnson2', age: 50 }
  ]);

  const handleAddRow = () => {
    setData(prevData => [
      ...prevData,
      { id: prevData.length + 1, name: '', age: 0 },
    ]);
  };

  const handleDeleteRow = id => {
    setData(prevData => prevData.filter(item => item.id !== id));
  };

  const handleInputChange = (id, field, value) => {
    setData(prevData =>
      prevData.map(item => {
        if (item.id === id) {
          return { ...item, [field]: value };
        }
        return item;
      })
    );
  };

  return (
    <div>
      <button onClick={handleAddRow}>Add Row</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>
                <input
                  type="text"
                  value={item.name}
                  onChange={e =>
                    handleInputChange(item.id, 'name', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={item.age}
                  onChange={e =>
                    handleInputChange(item.id, 'age', e.target.value)
                  }
                />
              </td>
              <td>
                <button onClick={() => handleDeleteRow(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;