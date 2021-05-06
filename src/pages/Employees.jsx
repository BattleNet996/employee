import { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { useHistory} from 'react-router-dom'

function Employees({ employees, dispatch }) {
  const [newEmployeeName, setNewEmployeeName] = useState('')
  const history = useHistory()

  function createEmployeeHandler() {
    dispatch({
      type: 'create_employee',
      payload: {
        employee: {
          name: newEmployeeName,
        },
      },
    })
  }

  function deleteEmployeeHandler(key) {
    dispatch({
      type: 'delete_employee',
      payload: {
        key,
      },
    })
  }
  console.log("hello")
  console.log(employees)
  return (
    
    <div className="employees page">
      <h1>Employee Page</h1>
      <ul>
        {employees.map(employee => (
          <li key={employee.key}>
            key: {employee.key}
            <br />
            first_name：{employee.firstName}
            &nbsp;&nbsp;&nbsp;
            last_name: {employee.lastName}
            <br />
            tag: {employee.tags}&nbsp;&nbsp;&nbsp;
            <button onClick={() => 
              dispatch({
                type:"delete_employee",
                payload: employee.key,
              })
             }>删除雇工</button>
             &nbsp;&nbsp;&nbsp;
            <button onClick={() => history.push("/Employees/"+employee.key)}>跳转</button>
             &nbsp;&nbsp;&nbsp;
            <Link to={'/Employee/' + employee.key}>个人页面</Link>
            <br />
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newEmployeeName}
        onChange={e => setNewEmployeeName(e.target.value)}
      />
      <button onClick={createEmployeeHandler}>创建雇工</button>
    </div>
  )
}

// export default connect(model => {
//   return {
//     Employees: model.Employees,
//   }
// })(Employees)

export default connect(({ employees }) => ({ employees }))(Employees)