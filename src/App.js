// logo import this 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Root from "./Layout/Root";
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage'
import HomeRoute from './components/HomeRoute/HomeRoute';
function App() {
  const router  = createBrowserRouter([
     {path:'/',
      element:<Root></Root>,

      children:[
       
        {path:'/',
        loader: () => {

          return fetch('https://openapi.programming-hero.com/api/quiz')

       },
        element:<Home></Home>},
        
        {path:'/course',
        loader: () => {

          return fetch('https://openapi.programming-hero.com/api/quiz')

       },
        element:<Home></Home>},
        {
          path: "/course/:courseId",
          loader:  ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.courseId}`
            );
          },
          element: <HomeRoute></HomeRoute>,
        },
        {path:'/recharts', element:<Statistics></Statistics>},
        {path:'/blog', element:<Blog></Blog>},
        {path:'/*', element:<ErrorPage></ErrorPage>}
        
      ]
    }
  ])
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
