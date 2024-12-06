import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import API from '../api';

const Reports = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch chart data from the backend
    API.get('/chart/reports').then((response) => setData(response.data));
  }, []);

  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">Reports</h1>
        <p className="text-muted">Renewable Energy Adoption Rates</p>
      </div>
      <div className="card shadow-lg p-5">
        <h2 className="card-title mb-4 text-primary">Adoption Analysis</h2>
        <p>
          Renewable energy adoption has varied across regions. Advanced economies lead with higher adoption rates, while emerging markets show promising growth potential, driven by supportive policies and international cooperation.
        </p>
        <BarChart width={600} height={300} data={data} className="mx-auto">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="region" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="adoption" fill="#28a745" />
        </BarChart>
        <p className="text-muted mt-4">
          <small>Data source: Backend API</small>
        </p>
      </div>
    </div>
  );
};

export default Reports;
