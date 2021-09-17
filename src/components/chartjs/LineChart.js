import React from 'react'
import { Line } from 'react-chartjs-2'
const data = {
  datasets: [
    {
      backgroundColor: '#D6FAE0',
      data: [120000, 150000, 190000, 190000, 220000,220000, 150000, 190000, 190000],
      label: 'Total Payout',
      fill: true
    },
    {
      backgroundColor: '#FDDFE0',
      data: [110000, 160000, 220000, 253300, 235000,260000, 220000, 253300, 235000],
      label: 'Total Collected',
      fill: true
    }
  ],
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun','Jul','Aug','Sep']
}

const LineChart = () => {
  return (
    <div>
      <Line data={data} height={370} options={{ maintainAspectRatio: false }} />
    </div>
  )
}

export default LineChart
