import React from 'react'
import { Bar } from 'react-chartjs-2'
const data = {
  datasets: [
    {
      backgroundColor: ['#ccc','#666'],
      data: [2500000, 5000000],
      label: 'Ajot'
    }
  ],
  labels: ['Short', 'Long']
}

const BarChart = () => {
  return (
    <div>
      <Bar data={data} height={370} options={{ maintainAspectRatio: false }} />
    </div>
  )
}

export default BarChart
