import { useState } from 'react'
import { connect } from 'react-redux'
import {  useRouteMatch } from 'react-router-dom'
import ReactDOM from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { render } from 'react-dom';

function FormFunc(){ 
  console.log("hellow world1")
  const layout = {
    labelCol: {
      span: 8,

    },
    wrapperCol: {
      span: 16,

    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
 
    },
  };
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  // console.log(values['tags'])

  return (
    <div>
        <br />
        <Form
          {...layout
          }
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Firstname"
            name="firstname"
            rules={[
              {
                required: true,
                message: 'Please input your firstname!',
              },
            ]}
          >
            <Input />
          </Form.Item>
    
          <Form.Item
            label="Lastname"
            name="lastname"
            rules={[
              {
                required: true,
                message: 'Please input your lastname!',
              },
            ]}
          >
          {/* <Input.Password /> */}
            <Input />
          
          </Form.Item>

          <Form.Item
            label="Age"
            name="age"
            rules={[
              {
                required: true,
                message: 'Please input your age!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          
          <Form.Item
            label="Tags"
            name="tags"
            rules={[
              {
                required: true,
                message: 'Please input your tags!',
              },
            ]}
          >
            <Input />

          </Form.Item>

          <Form.Item
            label="Address"
            name="address"
            rules={[
              {
                required: true,
                message: 'Please input your address!',
              },
            ]}
          >
            <Input />

          </Form.Item>
    
          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
    
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
    </div>
    );
}



function Employee({ employees, dispatch }) {
  // const {
  //   params: { key },
  // } = useRouteMatch()
  // const {employees,dispatch} = props;



  const {key} = useRouteMatch().params;

  const [newEmployeeFirstName, setnewEmployeeFirstName] = useState('')

  const actualEmployee = employees.find((employee) => (employee.key === key))

  function updateEmployeeHandler() {
    console.log("hellow world2")
    dispatch({
      type: 'update_employee',
      payload: {
        employee: {
          ...actualEmployee,
          name: newEmployeeFirstName,
        },
      },
    })
  }

  return (
    <div className="Employee page">
      This is Employee {actualEmployee.name} 's page
      <input
        value={newEmployeeFirstName}
        onChange={e => setnewEmployeeFirstName(e.target.value)}
      />
      <button onClick={updateEmployeeHandler}>更新雇工姓名</button>
      <FormFunc />
    </div>
  )
}

export default connect(({ employees }) => ({ employees }))(Employee)