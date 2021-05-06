import { createStore } from 'redux'

// 全局数据的初始状态
const initialModel = {
  employees: [
    {
        key: "1",
        firstName:  "John",
        lastName:  "Brown",
        age:  32,
        address:  "New York No. 1 Lake Park",
        tags:  ["nice", "developer"],
      },
    {
      key: "2",
      firstName:  "Jim",
      lastName:  "Green",
      age:  42,
      address:  "London No. 1 Lake Park",
      tags:  ["loser"],
    },
    {
    key: "3",
      firstName:  "Joe",
      lastName:  "Black",
      age:  32,
    address:  "Sidney No. 1 Lake Park",
      tags:  ["cool", "teacher"],
    }
     
  ]

//   products: [],

//   something: 'yeah',
}

export default createStore((model = initialModel, action) => {
  const { employees } = model

  switch (action.type) {
    case 'create_employee':
      const { employee } = action.payload

      employee.key =
        'Employee_Key' + String(Math.floor(Math.random() * 1000000)).padStart(6, '0')

      return {
        employees: employees.concat([employee]),
      }

    case 'delete_employee':
      // const { key: targetKey } = action.payload
      const targetKey = action.payload;

      return {
        employees: employees.filter(u => u.key !== targetKey),
      }

    case 'update_employee':
      const { employee: newEmployee } = action.payload

      return {
        employees: employees.map(employee => (employee.key === newEmployee.key ? newEmployee: employee)),
      }

    default:
      return model
  }
})