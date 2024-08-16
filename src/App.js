import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import MainLayout from './components/MainLayout/MainLayout';
import Home from './components/Home/Home';
import Programs from './components/Programs/Programs';
import Details from './components/Details/Details';

function App() {
  let routes = createBrowserRouter([
    {path:'/',element:<MainLayout/>,children:[
      {index:true , element:<Home/>},
      {path:'Details/:id',element:<Details />},

      {path:'Programs' , element:<Programs/>},
    ]
      
    }
  ])

  return (
<RouterProvider router={routes}></RouterProvider>

  );
}

export default App;
