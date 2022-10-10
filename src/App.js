// logo import this 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Root from "./Layout/Root";
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage'
function App() {
  const router  = createBrowserRouter([
     {path:'/',
      element:<Root></Root>,

      children:[
       
        {path:'/',element:<Home></Home>},
        {path:'/home',element:<Home></Home>},
        {path:'/statistics', element:<Statistics></Statistics>},
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
