// Graph.js

import React from 'react';
import { PieChart, Pie } from 'recharts';


export const Graph = () => {
    // Sample data
    const data = [
        { name: 'Geeksforgeeks', students: 400 },
        { name: 'Technical scripter', students: 700 }
     
    ];

    return (
        <div className="graph-container"> {/* Apply container styles */}
            <PieChart className="pie-chart" width={700} height={700}> {/* Apply chart styles */}
                <Pie data={data} dataKey="students" outerRadius={250} fill="green" />
            </PieChart>
        </div>
    );
}
