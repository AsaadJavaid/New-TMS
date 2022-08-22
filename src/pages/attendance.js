import { Space, Table } from 'antd';
import React from 'react';
const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Attendance',
    dataIndex: 'attendance',
    key: 'attendance',
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="middle">
        <a>Mark Leave</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    date: '27 May 2001',
    attendance: 'Present'
    
  },
  {
    key: '2',
    date: '10 March 2000',
    attendance: 'Absent'

    
  },
  {
    key: '3',
    date: '17 August 2001',
    attendance: 'Present'

  
  },
];

const App = () => 
<Table pagination={false} columns={columns} dataSource={data} />;

export default App;