import React, { useState } from 'react';
import ApplicationMenu from '../../components/ApplicationMenu';
import Dashboard from '../../dashboard/Index';
import { COLUMNS, DATA } from '../../utils';
import { Table, Radio, Divider, Layout } from 'antd';
import 'antd/dist/antd.css';

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      'selectedRows: ',
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User',
    // Column configuration not to be checked
    name: record.name,
  }),
};

const Customers = ({setVisible}) => {
  const [selectionType, setSelectionType] = useState('checkbox');

  const [pagination, setPagination] = useState({
    pageSize: 10,
    showSizeChanger: true,
    current: 1,
  });
  const loading = false;
  return (
      <div className='w-full p-5'>
        <ApplicationMenu setVisible={setVisible} />
        <div className='mb-16 overflow-x-auto z-40'>
          <Table
            rowSelection={{
              type: 'checkbox',
              ...rowSelection,
            }}
            onChange={(value) => setPagination(value)}
            pagination={pagination}
            loading={loading}
            columns={COLUMNS}
            dataSource={DATA}
          />
        </div>
      </div>
  );
};

export default Customers;
