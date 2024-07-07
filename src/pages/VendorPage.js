import React from 'react';
import ListBox from '../components/ListBox';

const App = () => {
  // Define columns
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Brand Name',
      dataIndex: 'brandname',
      key: 'brandname',
    },
    {
      title: 'Phone Number 1',
      dataIndex: 'phonenumber1',
      key: 'phonenumber1',
    },
    {
      title: 'Phone Number 2',
      dataIndex: 'phonenumber2',
      key: 'phonenumber2',
    },
  ];

  // Define data
  const data = [
    {
      key: '1',
      name: 'John Brown',
      brandname: 'Brand A',
      phonenumber1: '1234567890',
      phonenumber2: '0987654321',
      addresses: ['New York No. 1 Lake Park'],
    },
    {
      key: '2',
      name: 'Jim Green',
      brandname: 'Brand B',
      phonenumber1: '2345678901',
      phonenumber2: '1098765432',
      addresses: ['London No. 1 Lake Park'],
    },
    {
      key: '3',
      name: 'Joe Black',
      brandname: 'Brand C',
      phonenumber1: '3456789012',
      phonenumber2: '2109876543',
      addresses: ['Sidney No. 1 Lake Park'],
    },
  ];

  return (
    <div style={{ width: '1500px', minWidth: "200px" }}>
      <ListBox columns={columns} data={data} />
    </div>
  );
};

export default App;
