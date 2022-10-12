
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowHome from '../ShowHome/ShowHome';
import Header from '../Header/Header';


const Home = () => {
     const courses = useLoaderData([])
     const course = courses.data;
    console.log(course)
     return (
         <div>
                <Header></Header>
             
                     <div className="grid grid-cols-3 gap-6 w-10/12 mx-auto my-5 ">
                     {
                          course.map(course => <ShowHome
                          key={course.id}
                          course={course}
                          ></ShowHome>)
                      }
                     </div>
                  </div>
              );
          };

export default Home;