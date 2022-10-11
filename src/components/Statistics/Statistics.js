// import React from 'react';

// const Statistics = () => {
//      return (
//           <div>
               
//           </div>
//      );
// };

// export default Statistics;


import React from 'react';
import { useLoaderData } from 'react-router-dom';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,  ResponsiveContainer,
    ComposedChart, } from 'recharts';

const Statistics = () => {
    const totalCourse = useLoaderData()
     const courseItems = totalCourse.data;
     const data = courseItems;
     const {id , name,total} = courseItems;
    return (
        <div className='my-5' >
            <ComposedChart width={500} height={300} data={data}  className="mx-auto">
            <Bar type="monotone" dataKey="total" stroke="#82ca9d" background={{ fill: '#2FA9DF' }} fill="#8884d8" />
            <XAxis dataKey="name" />
          <YAxis dataKey="id"  />
          <Tooltip />
            </ComposedChart>
        </div>
    );
};

export default Statistics;