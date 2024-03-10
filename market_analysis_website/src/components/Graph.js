// Graph.js

import React from 'react';
import { PieChart, Pie } from 'recharts';
import './Graph.css'; // Import the CSS file

export const Graph = () => {
    // Sample data
    const data = [
        { name: 'positive', no_reviews: 400 },
        { name: 'ngeative', no_reviews: 700 },
      
    ];

    return (
        <div className="graph-container"> {/* Apply container styles */}
            <PieChart className="pie-chart" width={700} height={700}> {/* Apply chart styles */}
                <Pie data={data} dataKey="no_reviews" outerRadius={250} fill="green" />
            </PieChart>
        </div>
    );
};
