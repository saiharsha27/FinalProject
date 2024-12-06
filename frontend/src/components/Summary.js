import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import API from '../api';

const Summary = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch chart data from the backend
    API.get('/chart/summary').then((response) => setData(response.data));
  }, []);

  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">Summary</h1>
        <p className="text-muted">Global Clean Energy Investment Trends</p>
      </div>
      <div className="card shadow-lg p-5">
        <h2 className="card-title mb-4 text-primary">Investment Overview</h2>
        <p>
          Global clean energy investments have increased significantly over the years, focusing on renewables, energy storage, and grid development. While advanced economies lead in innovation, emerging markets are making substantial contributions to the global transition.
        </p>
        <LineChart width={600} height={300} data={data} className="mx-auto">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="investment" stroke="#007bff" />
        </LineChart>
        <p className="text-muted mt-4">
          <small>Data source: Backend API</small>
        </p>
      </div>
    </div>
  );
};

export default Summary;
