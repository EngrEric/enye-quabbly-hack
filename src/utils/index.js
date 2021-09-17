
export const DATA = [
    {
      key: '1',
      isActive: false,
      loadID: '3671827187',
      name:'Kristin Watson',
      amount:'₦2000/day',
      ajotPlan:'Short Term',
      duration:'3 Months',
      target:'₦160,000',
      current:'₦62,000',
      status: 'Martured'
    },
    {
      key: '2',
      isActive: false,
      loadID: '3671827187',
      name:'Kristin Watson',
      amount:'₦4000/day',
      ajotPlan:'Long Term',
      duration:'20 Months',
      target:'₦160,000',
      current:'₦108,000',
      status: 'Martured'
    },
    {
      key: '3',
      isActive: false,
      loadID: '3671827187',
      name:'Kristin Watson',
      amount:'₦5000/day',
      ajotPlan:'Short Term',
      duration:'6 Months',
      target:'₦1,000,000',
      current:'₦490,000',
      status: 'Growing'
    },
    {
      key: '4',
      isActive: false,
      loadID: '3671827187',
      name:'Kristin Watson',
      amount:'₦5000/day',
      ajotPlan:'Long Term',
      duration:'18 Months',
      target:'₦3,000,000',
      current:'₦990,000',
      status: 'Martured'
    },
    {
      key: '5',
      isActive: false,
      loadID: '3671827187',
      name:'Kristin Watson',
      amount:'₦5000/day',
      ajotPlan:'Short Term',
      duration:'5 Months',
      target:'₦160,000',
      current:'₦50,000',
      status: 'Growing'
    },
    {
      key: '6',
      isActive: false,
      loadID: '3671827187',
      name:'Kristin Watson',
      amount:'₦5000/day',
      ajotPlan:'Short Term',
      duration:'6 Months',
      target:'₦160,000',
      current:'₦90,000',
      status: 'Growing'
    },
    {
      key: '7',
      isActive: false,
      loadID: '3671827187',
      name:'Kristin Watson',
      amount:'₦1000/day',
      ajotPlan:'Long Term',
      duration:'30 Months',
      target:'₦160,000',
      current:'₦80,000',
      status: 'Martured'
    },
    {
      key: '8',
      isActive: false,
      loadID: '3671827187',
      name:'Kristin Watson',
      amount:'₦5,000/day',
      ajotPlan:'Short Term',
      duration:'3 Months',
      target:'₦160,000',
      current:'₦90,000',
      status: 'Growing'
    },
    {
      key: '9',
      isActive: false,
      loadID: '3671827187',
      name:'Kristin Watson',
      amount:'₦4,000/day',
      ajotPlan:'Long Term',
      duration:'13 Months',
      target:'₦160,000',
      current:'₦90,000',
      status: 'Martured'
    }

  ]

export const COLUMNS = [
    {
      title: <span className='font-bold'>Customer ID</span>,
      dataIndex: 'loadID',
      key: 'loadID',
      render: loadID => <span>{loadID}</span>
    },
    {
      title: <span className='font-bold'>Customer Name</span>,
      key: 'name',
      dataIndex: 'name',
      render: name => <span>{name}</span>
    },
    {
      title: <span className='font-bold'>Ajot Plan</span>,
      key: 'ajotPlan',
      dataIndex: 'ajotPlan',
      render: ajotPlan => <span>{ajotPlan}</span>
    },
    {
      title: <span className='font-bold'>Duration</span>,
      key: 'duration',
      dataIndex: 'duration',
      render: duration => <span>{duration}</span>
    },
    {
      title: <span className='font-bold'>Amount</span>,
      key: 'amount',
      dataIndex: 'amount',
      render: amount => <span>{amount}</span>
    },
    {
      title: <span className='font-bold'>Target</span>,
      key: 'target',
      dataIndex: 'target',
      render: target => <span>{target}</span>
    },
    {
      title: <span className='font-bold'>Current</span>,
      key: 'current',
      dataIndex: 'current',
      render: current => <span>{current}</span>
    },
  
    {
      title: <span className='font-bold capitalize'>Status</span>,
      key: 'status',
      dataIndex: 'status',
      render: status => status === 'Martured' ? (
        <button className='px-6 py-2 border bg-yellow-100 text-yellow-600 hover:text-yellow-700 rounded-lg hover:bg-yellow-100 text-sm'>
          {status}
        </button>
      ) : (
        <button className='px-6 py-2 border text-black hover:text-gray-900 rounded-lg text-sm'>
          {status}
        </button>
      )
    },
    {
      title: <span className='font-bold capitalize'>Action</span>,
      key: 'action',
      render: (record, _) => <i className='fas fa-ellipsis-v light-100 font-bold ml-4' />
    }
  ]