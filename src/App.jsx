import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Pastes from './Components/Pastes';
import ViewPaste from './Components/ViewPaste';
import Develooer from './Components/Develooer';
import Footer from './Components/Footer';

function App() {
  const reactRouter = createBrowserRouter(
    [
      {
        path:'/',
        element:
        <div>
          <NavBar/>
          <Home/>
          <Footer/> 
        </div>
      },
      {
        path:'/pastes',
        element:
        <div>
          <NavBar/>
          <Pastes/>
          <Footer/>          
        </div>
      },
      {
        path:'/pastes/:id',
        element:
        <div>
          <NavBar/>
          <ViewPaste/>
          <Footer/>          
        </div>
      },
      {
        path:'/developer',
        element:
        <div>
          <NavBar/>
          <Develooer/>
          <Footer/>
        </div>
      }
    ]
  );

  return (
    <div>
      <RouterProvider router={reactRouter}></RouterProvider>
    </div>
  )
}

export default App
