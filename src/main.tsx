//import { StrictMode } from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {createBrowserRouter, Outlet} from 'react-router-dom'
import {RouterProvider} from 'react-router-dom'
import MoviesPage from './pages/MoviesPage'
import NotFoundPage from './pages/NotFoundPage'
import ActorsPage from './pages/ActorsPage'
import MoviePage from './pages/MoviePage'
import ActorPage from './pages/ActorPage'

const Layout = () => {

  return (

    <div>
      <Outlet/>
    </div>

  );

}

const router = createBrowserRouter([{
  path:'/',
  element:<Layout />,
  children:[
    {
    path:'/movies',
    element:<MoviesPage />
  },
  {
    path:'/',
    element:<App />
  },
  {
    path:'/actors',
    element:<ActorsPage />
  },
  {
    path:'/actor',
    element:<ActorPage />
  },
  {
    path:'/movie',
    element:<MoviePage />
  },
  {
    path:'*',
    element:<NotFoundPage />
  }
  
]

}])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
  
)
