import { Table, Tag, Space } from 'antd';
import 'antd/dist/antd.css';
import { connect } from 'react-redux'

{/* <Table data={data}  >
    <Column  width={100} sort fixed resizable>
        <HeaderCell>ID</HeaderCell>
        <Cell dataKey="id" />
    </Column>
    <Column  width={100} sort resizable>
        <HeaderCell>Name</HeaderCell>
        <Cell dataKey="name" />
    </Column>
    <Column  width={100} sort resizable>
        <HeaderCell>Email</HeaderCell>
        <Cell dataKey="email" />
    </Column>
</Table> */}

const columns = [
  {
    title: 'Key',
    dataIndex: 'key',
    key: 'key',
    render: text => <a>{text}</a>,
  },
  {
    title: 'FirstName',
    dataIndex: 'firstname',
    key: 'firstname',
    render: text => <a>{text}</a>,
  },
  {
    title: 'LastName',
    dataIndex: 'lastname',
    key: 'lastname',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
]

const data = [
  {
    "key": "1",
    "firstName":  "John",
    "lastName":  "Brown",
    "age":  32,
    "address":  "New York No. 1 Lake Park",
    "tags":  ["nice", "developer"],
  },
  {
    "key": "2",
    "firstName":  "Jim",
    "lastName":  "Green",
    "age":  42,
    "address":  "London No. 1 Lake Park",
    "tags":  ["loser"],
  },
  {
    "key": "3",
    "firstName":  "Joe",
    "lastName":  "Black",
    "age":  32,
    "address":  "Sidney No. 1 Lake Park",
    "tags":  ["cool", "teacher"],
  }
];



function List() {

    return(
        <div>
          <div className="List page">List Page</div>
          <Table  columns={columns} dataSource={data} />
        </div>
    )
  }

  export default connect(({ employees }) => ({ employees }))(List)

  
