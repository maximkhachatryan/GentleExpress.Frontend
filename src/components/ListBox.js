import React, { useState } from 'react';
import { Table, Input, Modal, Button, Form } from 'antd';

const ListBox = ({ columns, data }) => {
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [addresses, setAddresses] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchText(value);
    const filtered = data.filter((item) =>
      Object.keys(item).some((key) =>
        String(item[key]).toLowerCase().includes(value)
      )
    );
    setFilteredData(filtered);
  };

  const showModal = (item) => {
    setSelectedItem(item);
    setAddresses(item.addresses || []);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setSelectedItem(null);
    setAddresses([]);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedItem(null);
    setAddresses([]);
  };

  const addAddress = (address) => {
    setAddresses([...addresses, address]);
  };

  const renderModalContent = () => {
    if (!selectedItem) return null;
    return (
      <div>
        {columns.map((column) => (
          <p key={column.key}>
            <strong>{column.title}:</strong> {selectedItem[column.dataIndex]}
          </p>
        ))}
        <Form
          onFinish={(values) => addAddress(values.address)}
          layout="inline"
        >
          <Form.Item
            name="address"
            rules={[{ required: true, message: 'Please input an address!' }]}
          >
            <Input placeholder="New Address" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add Address
            </Button>
          </Form.Item>
        </Form>
        <div>
          <strong>Addresses:</strong>
          {addresses.map((address, index) => (
            <p key={index}>{address}</p>
          ))}
        </div>
      </div>
    );
  };

  const handleRowClick = (record) => {
    showModal(record);
  };

  return (
    <div style={{width: "100%"}}>
      <Input
        placeholder="Search..."
        value={searchText}
        onChange={handleSearch}
        style={{ marginBottom: 16 }}
      />
      <Table
        columns={columns}
        dataSource={filteredData}
        onRow={(record) => ({
          onClick: () => handleRowClick(record),
        })}
      />
      <Modal
        title="Item Details"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {renderModalContent()}
      </Modal>
    </div>
  );
};

export default ListBox;
