
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowHome from '../ShowHome/ShowHome';

const HomeRoute = () => {
    const course = useLoaderData();
  
    const courseQuiz = course.data.questions ;
    const data = course.data
     const {name} = data
    return (
        <div>
             <div className="">
            <h1 className='text-2xl font-semibold text-center'>Quiz of {name}</h1>
          </div>
           <div className="w-8/12 mx-auto">
           {
            courseQuiz.map(quiz => <ShowHome
            key={quiz.id}
            quiz={quiz}
            data={data}
            ></ShowHome>)
           }
           </div>
        </div>
    );
};

export default HomeRoute;