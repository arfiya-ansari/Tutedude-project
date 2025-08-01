
'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface PriceChartProps {
  productId: string;
}

export default function PriceChart({ productId }: PriceChartProps) {
  const generateMockData = (productId: string) => {
    const basePrice = productId === 'onions' ? 25 : productId === 'tomatoes' ? 35 : productId === 'oil' ? 150 : 20;
    const data = [];
    
    for (let i = 30; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const variation = (Math.random() - 0.5) * 10;
      data.push({
        date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        price: Math.max(basePrice + variation, basePrice * 0.8)
      });
    }
    
    return data;
  };

  const data = generateMockData(productId);

  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip 
            formatter={(value) => [`₹${value.toFixed(2)}`, 'Price']}
            labelFormatter={(label) => `Date: ${label}`}
          />
          <Line 
            type="monotone" 
            dataKey="price" 
            stroke="#f97316" 
            strokeWidth={2}
            dot={{ fill: '#f97316', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
